package com.example.POJO_Controllers.CarsAPIApplicationPackage;

import com.example.POJO_Controllers.CarsAPIApplicationPackage.CarModel;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CarController {
    @RequestMapping(value = "/cars", method = RequestMethod.GET)
    public List<CarModel> getCars(CarModel model) {

        List<CarModel> carsList = new ArrayList<CarModel>();

        carsList.add(new CarModel("Toyota Prius", "Prime", 34450, 50));
        carsList.add(new CarModel("Tesla Model 3", "Long Range", 62990, 130));
        carsList.add(new CarModel("Hyundai Kona", "Electric Limited", 42500, 120));
        carsList.add(new CarModel("Chevrolet Bolt", "2LT", 34700, 120));
        carsList.add(new CarModel("Chevrolet Bolt", "EUV Premier", 38000, 115));

        return carsList;
    }
}