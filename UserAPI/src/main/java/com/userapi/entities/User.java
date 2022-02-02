package com.userapi.entities;


import javax.persistence.*;
import java.util.Arrays;
import java.util.List;

@Entity(name="user")
@Table(name="users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(unique = true,nullable = false)
    private String mail;

    @Column
    private String name;

    @Column
    private String surnames;

    @Column(nullable = false)
    private String hashedPassword;

    @Column(nullable = false)
    private boolean isAdmin;

    @Column
    @ManyToMany
    private List<Product> productsOnShoppingCart;

    @Column
    @ManyToMany
    private List<Product> productsBought;

    public User(){}

    public User(String mail, String name, String surnames, String hashedPassword, boolean isAdmin, List<Product> productsOnShoppingCart, List<Product> productsBought) {
        this.mail = mail;
        this.name = name;
        this.surnames = surnames;
        this.hashedPassword = hashedPassword;
        this.isAdmin = isAdmin;
        this.productsOnShoppingCart = productsOnShoppingCart;
        this.productsBought = productsBought;
    }

    public User(long id, String mail, String name, String surnames, String hashedPassword, boolean isAdmin, List<Product> productsOnShoppingCart, List<Product> productsBought) {
        this.id = id;
        this.mail = mail;
        this.name = name;
        this.surnames = surnames;
        this.hashedPassword = hashedPassword;
        this.isAdmin = isAdmin;
        this.productsOnShoppingCart = productsOnShoppingCart;
        this.productsBought = productsBought;
    }

    public User(String mail, String password){
        this.mail=mail;
        this.hashedPassword=password;
    }

    public User(String mail, String name, String surnames, String hashedPassword) {
        this.mail = mail;
        this.name = name;
        this.surnames = surnames;
        this.hashedPassword = hashedPassword;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
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

    public String getHashedPassword() {
        return hashedPassword;
    }

    public void setHashedPassword(String hashedPassword) {
        this.hashedPassword = hashedPassword;
    }

    public boolean isAdmin() {
        return isAdmin;
    }

    public void setAdmin(boolean admin) {
        isAdmin = admin;
    }

    public List<Product> getProductsOnShoppingCart() {
        return productsOnShoppingCart;
    }

    public void setProductsOnShoppingCart(List<Product> productsOnShoppingCart) {
        this.productsOnShoppingCart = productsOnShoppingCart;
    }

    public List<Product> getProductsBought() {
        return productsBought;
    }

    public void setProductsBought(List<Product> productsBought) {
        this.productsBought = productsBought;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", mail='" + mail + '\'' +
                ", name='" + name + '\'' +
                ", surnames='" + surnames + '\'' +
                ", hashedPassword='" + hashedPassword + '\'' +
                ", isAdmin=" + isAdmin +
                ", productsOnShoppingCart=" + productsOnShoppingCart +
                ", productsBought=" + productsBought +
                '}';
    }
}

