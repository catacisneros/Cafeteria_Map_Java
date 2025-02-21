package com.campus.cafeteria.model;

import java.time.LocalDateTime;

public class Reservation {
    private Long id;
    private String studentId;
    private LocalDateTime reservationTime;
    private String mealType; // BREAKFAST, LUNCH, DINNER
    private int tableNumber;

    public Reservation(Long id, String studentId, LocalDateTime reservationTime, String mealType, int tableNumber) {
        this.id = id;
        this.studentId = studentId;
        this.reservationTime = reservationTime;
        this.mealType = mealType;
        this.tableNumber = tableNumber;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    
    public String getStudentId() { return studentId; }
    public void setStudentId(String studentId) { this.studentId = studentId; }
    
    public LocalDateTime getReservationTime() { return reservationTime; }
    public void setReservationTime(LocalDateTime reservationTime) { this.reservationTime = reservationTime; }
    
    public String getMealType() { return mealType; }
    public void setMealType(String mealType) { this.mealType = mealType; }
    
    public int getTableNumber() { return tableNumber; }
    public void setTableNumber(int tableNumber) { this.tableNumber = tableNumber; }

} 