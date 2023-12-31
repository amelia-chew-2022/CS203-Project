package csd.week5.eventInfo;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class EventInfoNotFoundException extends RuntimeException {

    private static final long serialVersionUID = 1L;

    public EventInfoNotFoundException(Long id){

        super("Could not find Page " + id);
    }
}
