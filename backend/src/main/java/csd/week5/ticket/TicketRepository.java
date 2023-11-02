package csd.week5.ticket;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import csd.week5.transaction.Transaction;

@Repository
public interface TicketRepository extends JpaRepository <Ticket, Long> {
    List<Ticket> findAllByTransaction(Transaction transaction);
    List<Ticket> listTicketsByTransaction_Id(Transaction transaction);
    List<Ticket> findByTransaction(Transaction transaction);
}
