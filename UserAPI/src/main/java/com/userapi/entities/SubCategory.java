package com.userapi.entities;


import javax.persistence.*;

@Entity(name="subCategory")
@Table(name="subcategories")
public class SubCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column
    private String name;

    @JoinColumn(nullable = false)
    @ManyToOne
    private MainCategory mainCategory;


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

    @Override
    public String toString() {
        return "SubCategory{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", mainCategory=" + mainCategory +
                '}';
    }
}
