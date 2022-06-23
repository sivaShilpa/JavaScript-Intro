package com.example.POJO_Controllers.CarsAPIApplicationPackage;

public class CarModel {

    private String make;
    private String model;
    private int price;
    private int milesPerGallon;

    public CarModel(String make, String model, int price, int milesPerGallon) {
        this.make = make;
        this.model = model;
        this.price = price;
        this.milesPerGallon = milesPerGallon;
    }

    public String getMake() {
        return make;
    }

    public void setMake(String make) {
        this.make = make;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public int getMilesPerGallon() {
        return milesPerGallon;
    }

    public void setMilesPerGallon(int milesPerGallon) {
        this.milesPerGallon = milesPerGallon;
    }
}
