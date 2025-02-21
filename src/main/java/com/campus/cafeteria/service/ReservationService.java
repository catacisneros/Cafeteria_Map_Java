package com.campus.cafeteria.service;

import com.campus.cafeteria.model.Reservation;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Service
public class ReservationService {
    private List<Reservation> reservations = new ArrayList<>();
    private Long currentId = 1L;

    public Reservation createReservation(Reservation reservation) {
        reservation.setId(currentId++);
        reservations.add(reservation);
        return reservation;
    }

    public List<Reservation> getAllReservations() {
        return new ArrayList<>(reservations);
    }

    public Optional<Reservation> getReservationById(Long id) {
        return reservations.stream()
                .filter(r -> r.getId().equals(id))
                .findFirst();
    }

    public boolean cancelReservation(Long id) {
        return reservations.removeIf(r -> r.getId().equals(id));
    }
    
} 