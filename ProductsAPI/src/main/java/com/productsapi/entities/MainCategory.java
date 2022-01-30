package com.productsapi.entities;


import javax.persistence.*;

@Entity(name="mainCategory")
@Table(name="maincategories")
public class MainCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column
    private String name;



    public MainCategory(){}

    public MainCategory(String name) {
        this.name = name;
    }

    public MainCategory(long id, String name) {
        this.id = id;
        this.name = name;
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

    @Override
    public String toString() {
        return "MainCategory{" +
                "id=" + id +
                ", name='" + name + '\'' +
                '}';
    }

}
