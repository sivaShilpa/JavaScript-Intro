package com.example.POJO_Controllers.CarsAPIApplicationPackage.model;

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

    public String getModel() {
        return model;
    }

    public int getPrice() {
        return price;
    }

    public int getMilesPerGallon() {
        return milesPerGallon;
    }

}
