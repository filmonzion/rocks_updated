package com.products.products.entities;

import com.products.products.controllers.dto.ItemsDto;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

//Creating an items table
@Entity
public class Items {
    @Id
    @GeneratedValue
    private int id;
    private String itemName;
    private String itemDescription;
    private String itemPrice;
    private String itemQuantity;
    private String imageUrl;

    //creating constructor
    public Items() {
    }

    public Items(ItemsDto itemsDto) {
    }

    //Another constructor with fields

    public Items(String itemName, String itemDescription, String itemPrice, String itemQuantity, String imageUrl) {
        this.itemName = itemName;
        this.itemDescription = itemDescription;
        this.itemPrice = itemPrice;
        this.itemQuantity = itemQuantity;
        this.imageUrl = imageUrl;
    }

    //Creating getters and setters

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public String getItemDescription() {
        return itemDescription;
    }

    public void setItemDescription(String itemDescription) {
        this.itemDescription = itemDescription;
    }

    public String getItemPrice() {
        return itemPrice;
    }

    public void setItemPrice(String itemPrice) {
        this.itemPrice = itemPrice;
    }

    public String getItemQuantity() {
        return itemQuantity;
    }

    public void setItemQuantity(String itemQuantity) {
        this.itemQuantity = itemQuantity;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
}
