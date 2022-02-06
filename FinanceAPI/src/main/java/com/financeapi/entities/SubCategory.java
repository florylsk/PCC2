package com.financeapi.entities;


import java.util.Arrays;


public class SubCategory {

    private long id;

    private String name;

    private MainCategory mainCategory;

    private byte[] image;


    public SubCategory(){}

    public SubCategory(String name) {
        this.name = name;
    }

    public SubCategory(long id, String name) {
        this.id = id;
        this.name = name;
    }

    public SubCategory(String name, MainCategory mainCategory) {
        this.name = name;
        this.mainCategory = mainCategory;
    }

    public SubCategory(String name, MainCategory mainCategory, byte[] image) {
        this.name = name;
        this.mainCategory = mainCategory;
        this.image = image;
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

    public MainCategory getMainCategory() {
        return mainCategory;
    }

    public void setMainCategory(MainCategory mainCategory) {
        this.mainCategory = mainCategory;
    }

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }

    @Override
    public String toString() {
        return "SubCategory{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", mainCategory=" + mainCategory +
                ", image=" + Arrays.toString(image) +
                '}';
    }
}
