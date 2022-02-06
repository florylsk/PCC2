package com.financeapi.entities;


import org.springframework.data.mongodb.core.mapping.Document;

import java.time.YearMonth;
import java.util.List;

@Document(collection="transactions")
public class Transaction {
    private String userId;
    private List<Product> userItems;
    private String name;
    private String surnames;
    private String dni;
    private String phone;
    private String address;
    private String country;
    private int zipCode;
    private String city;
    private String province;
    private String cardNumber;
    private String cardName;
    private String cardExpiration;
    private int cardSecurityCode;
    private String transactionCode;
    private long timeTransaction;

    public Transaction(){}

    public Transaction(String userId, List<Product> userItems, String name, String surnames, String dni, String phone, String address, String country, int zipCode, String city, String province, String cardNumber, String cardName, String cardExpiration, int cardSecurityCode) {
        this.userId = userId;
        this.userItems = userItems;
        this.name = name;
        this.surnames = surnames;
        this.dni = dni;
        this.phone = phone;
        this.address = address;
        this.country = country;
        this.zipCode = zipCode;
        this.city = city;
        this.province = province;
        this.cardNumber = cardNumber;
        this.cardName = cardName;
        this.cardExpiration = cardExpiration;
        this.cardSecurityCode = cardSecurityCode;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public List<Product> getUserItems() {
        return userItems;
    }

    public void setUserItems(List<Product> userItems) {
        this.userItems = userItems;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurnames() {
        return surnames;
    }

    public void setSurnames(String surnames) {
        this.surnames = surnames;
    }

    public String getDni() {
        return dni;
    }

    public void setDni(String dni) {
        this.dni = dni;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public int getZipCode() {
        return zipCode;
    }

    public void setZipCode(int zipCode) {
        this.zipCode = zipCode;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public String getCardNumber() {
        return cardNumber;
    }

    public void setCardNumber(String cardNumber) {
        this.cardNumber = cardNumber;
    }

    public String getCardName() {
        return cardName;
    }

    public void setCardName(String cardName) {
        this.cardName = cardName;
    }

    public String getCardExpiration() {
        return cardExpiration;
    }

    public void setCardExpiration(String cardExpiration) {
        this.cardExpiration = cardExpiration;
    }

    public int getCardSecurityCode() {
        return cardSecurityCode;
    }

    public void setCardSecurityCode(int cardSecurityCode) {
        this.cardSecurityCode = cardSecurityCode;
    }

    public String getTransactionCode() {
        return transactionCode;
    }

    public long getTimeTransaction() {
        return timeTransaction;
    }

    public void setTimeTransaction(long timeTransaction) {
        this.timeTransaction = timeTransaction;
    }

    public void setTransactionCode(String transactionCode) {
        this.transactionCode = transactionCode;
    }
}
