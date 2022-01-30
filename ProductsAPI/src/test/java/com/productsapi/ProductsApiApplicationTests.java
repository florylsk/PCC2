package com.productsapi;

import com.productsapi.entities.MainCategory;
import com.productsapi.entities.Product;
import com.productsapi.entities.SubCategory;
import com.productsapi.repositories.MainCategoryRepository;
import com.productsapi.repositories.ProductRepository;
import com.productsapi.repositories.SubCategoryRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.io.IOException;
import java.io.InputStream;
import java.math.BigDecimal;

@SpringBootTest
class ProductsApiApplicationTests {

    @Autowired
    private MainCategoryRepository mainCategoryRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private SubCategoryRepository subCategoryRepository;


    @Test
    void contextLoads() {
    }

    @Test
    void populateDatabaseMainCategories(){
        //MainCategories
        MainCategory m1 = new MainCategory("Peripherals");
        MainCategory m2= new MainCategory("Components");
        MainCategory m3= new MainCategory("Smartphones and telephony");

        mainCategoryRepository.save(m1);
        mainCategoryRepository.save(m2);
        mainCategoryRepository.save(m3);
    }

    @Test
    void populateDatabaseSubCategories(){
        //MainCategories
        SubCategory s1 = new SubCategory("Mouses");
        SubCategory s2 = new SubCategory("Headphones");
        SubCategory s3 = new SubCategory("CPU Fans");
        SubCategory s4 = new SubCategory("Smartphones");

        subCategoryRepository.save(s1);
        subCategoryRepository.save(s2);
        subCategoryRepository.save(s3);
        subCategoryRepository.save(s4);
    }

    //String name, BigDecimal price, MainCategory mainCategory, SubCategory subCategory, byte[] mainImage, byte[] secondaryImage, String brand
    @Test
    void populateDatabaseProducts() throws IOException {
        //Products
        MainCategory m1 = mainCategoryRepository.findMainCategoryByName("Peripherals");
        MainCategory m2= mainCategoryRepository.findMainCategoryByName("Components");
        MainCategory m3= mainCategoryRepository.findMainCategoryByName("Smartphones and telephony");

        SubCategory s1 = subCategoryRepository.findSubCategoryByName("Mouses");
        SubCategory s2 = subCategoryRepository.findSubCategoryByName("Headphones");
        SubCategory s3 = subCategoryRepository.findSubCategoryByName("CPU Fans");
        SubCategory s4 = subCategoryRepository.findSubCategoryByName("Smartphones");

        InputStream reader = getClass().getResourceAsStream("/static/ProductImages/1667-tempest-x20w-vigilant-raton-gaming-inalambrico-opiniones.jpg");
        byte[] MainImage = new byte[77215];
        reader.read(MainImage);
        reader = getClass().getResourceAsStream("/static/ProductImages/1538-tempest-x20w-vigilant-raton-gaming-inalambrico.jpg");
        byte[] SecondaryImage = new byte[77215];
        reader.read(SecondaryImage);
        Product p1 = new Product("Tempest X20W Vigilant Ratón Gaming Inalámbrico",new BigDecimal(49.99),m1,s1,MainImage,SecondaryImage,"Tempest");
        productRepository.save(p1);

        reader = getClass().getResourceAsStream("/static/ProductImages/tempest-ghs301-barbarian-auriculares-gaming-71-rgb-pc-ps4-42751c2c-1987-4ef8-9af6-efb4a0887053.jpg");
        MainImage = new byte[77215];
        reader.read(MainImage);
        reader = getClass().getResourceAsStream("/static/ProductImages/tempest-ghs301-barbarian-auriculares-gaming-71-rgb-pc-ps4-45521ba6-a86a-476c-b41c-b745ed768f49.jpg");
        SecondaryImage = new byte[77215];
        reader.read(SecondaryImage);
        Product p2 = new Product("Tempest GHS301 Barbarian Auriculares Gaming RGB 7.1 PC/PS4/PS5/Switch",new BigDecimal(49.99),m1,s2,MainImage,SecondaryImage,"Tempest");
        productRepository.save(p2);

        reader = getClass().getResourceAsStream("/static/ProductImages/4764-tempest-basic-cooler-4pipes-white-ventilador-cpu-120mm-foto.jpg");
        MainImage = new byte[77215];
        reader.read(MainImage);
        reader = getClass().getResourceAsStream("/static/ProductImages/182-tempest-basic-cooler-4pipes-white-ventilador-cpu-120mm-caracteristicas.jpg");
        SecondaryImage = new byte[77215];
        reader.read(SecondaryImage);
        Product p3 = new Product("Tempest Basic Cooler 4Pipes White Ventilador CPU 120mm",new BigDecimal(30),m2,s3,MainImage,SecondaryImage,"Tempest");
        productRepository.save(p3);

        reader = getClass().getResourceAsStream("/static/ProductImages/1241-xiaomi-redmi-note-9-pro-6-128gb-verde-tropical-libre.jpg");
        MainImage = new byte[77215];
        reader.read(MainImage);
        reader = getClass().getResourceAsStream("/static/ProductImages/3699-xiaomi-redmi-note-9-pro-6-128gb-verde-tropical-libre-mejor-precio.jpg");
        SecondaryImage = new byte[77215];
        reader.read(SecondaryImage);
        Product p4 = new Product("Xiaomi Redmi Note 9 Pro 6/64GB Verde Tropical Libre\n",new BigDecimal(226.22),m3,s4,MainImage,SecondaryImage,"Tempest");
        productRepository.save(p4);

    }



    @Test
    void deleteDatabaseProducts(){
        productRepository.deleteAll();
    }

}
