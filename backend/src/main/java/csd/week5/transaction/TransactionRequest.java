package csd.week5.transaction;

import javax.validation.constraints.NotNull;

public class TransactionRequest {

    // @NotNull
    private int total_price;

    // @NotNull
    private long user_id;

    // Getters and setters
    public int getTotal_price() {
        return total_price;
    }

    public void setTotal_price(int total_price) {
        this.total_price = total_price;
    }

    public long getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }
}
