package com.productsapi.entities;


import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Arrays;

@Entity(name="product")
@Table(name="products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(unique = true,nullable = false)
    private String name;

    @Column(nullable = false)
    private BigDecimal price;

    @JoinColumn(nullable = false)
    @ManyToOne(cascade = CascadeType.REMOVE )
    private MainCategory mainCategory;

    @JoinColumn(nullable = false)
    @ManyToOne(cascade = CascadeType.REMOVE)
    private SubCategory subCategory;

    @Column(length=16777215)//length for mediumblob
    @Lob
    private byte[] mainImage;

    @Column(length=16777215)//length for mediumblob
    @Lob
    private byte[] secondaryImage;

    @Column(nullable = false)
    private String brand;

    public Product(){}

    public Product(String name, BigDecimal price, MainCategory mainCategory, SubCategory subCategory, byte[] mainImage, byte[] secondaryImage, String brand) {
        this.name = name;
        this.price = price;
        this.mainCategory = mainCategory;
        this.subCategory = subCategory;
        this.mainImage = mainImage;
        this.secondaryImage = secondaryImage;
        this.brand = brand;
    }

    public Product(long id, String name, BigDecimal price, MainCategory mainCategory, SubCategory subCategory, byte[] mainImage, byte[] secondaryImage, String brand) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.mainCategory = mainCategory;
        this.subCategory = subCategory;
        this.mainImage = mainImage;
        this.secondaryImage = secondaryImage;
        this.brand = brand;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public MainCategory getMainCategory() {
        return mainCategory;
    }

    public void setMainCategory(MainCategory mainCategory) {
        this.mainCategory = mainCategory;
    }

    public SubCategory getSubCategory() {
        return subCategory;
    }

    public void setSubCategory(SubCategory subCategory) {
        this.subCategory = subCategory;
    }

    public byte[] getMainImage() {
        return mainImage;
    }

    public void setMainImage(byte[] mainImage) {
        this.mainImage = mainImage;
    }

    public byte[] getSecondaryImage() {
        return secondaryImage;
    }

    public void setSecondaryImage(byte[] secondaryImage) {
        this.secondaryImage = secondaryImage;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", price=" + price +
                ", mainCategory=" + mainCategory +
                ", subCategory=" + subCategory +
                ", mainImage=" + Arrays.toString(mainImage) +
                ", secondaryImage=" + Arrays.toString(secondaryImage) +
                ", brand='" + brand + '\'' +
                '}';
    }
}
