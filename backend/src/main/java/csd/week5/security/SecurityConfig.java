package csd.week5.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@EnableWebSecurity
@Configuration
public class SecurityConfig {
    
    private UserDetailsService userDetailsService;

    public SecurityConfig(UserDetailsService userSvc){
        this.userDetailsService = userSvc;
    }
    
    /**
     * Exposes a bean of DaoAuthenticationProvider, a type of AuthenticationProvider
     * Attaches the user details and the password encoder   
     * @return
     */

    @Bean
    public DaoAuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
     
        authProvider.setUserDetailsService(userDetailsService);
        authProvider.setPasswordEncoder(encoder());
 
        return authProvider;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
        .sessionManagement()
        .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            .and()
        .httpBasic()
            .and()
        .authorizeRequests()
            .antMatchers(HttpMethod.GET, "/tickets").permitAll()
            .antMatchers(HttpMethod.POST, "/tickets", "tickets/").hasRole("ADMIN")
            .antMatchers(HttpMethod.PUT, "/tickets/*").hasRole("ADMIN")
            .antMatchers(HttpMethod.DELETE, "/tickets/*").hasRole("ADMIN")
            .antMatchers(HttpMethod.GET, "/tickets/*/*/buy").hasAnyRole("USER", "ADMIN")
            .antMatchers(HttpMethod.GET, "/home").permitAll()
            .antMatchers(HttpMethod.GET, "/eventinfo1/*").permitAll()
            .antMatchers(HttpMethod.GET, "/checkout").hasRole("USER")
            .and()
        .authenticationProvider(authenticationProvider())
        .csrf().disable()
        .formLogin().disable()
        .headers().disable();
        return http.build();
    }

    @Bean
    public BCryptPasswordEncoder encoder() {
        // auto-generate a random salt internally
        return new BCryptPasswordEncoder();
    }
}
 