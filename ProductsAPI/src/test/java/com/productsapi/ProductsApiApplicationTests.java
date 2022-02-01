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
        MainCategory peripherals = mainCategoryRepository.findMainCategoryByName("Peripherals");
        MainCategory smartphones_and_telephony = mainCategoryRepository.findMainCategoryByName("Smartphones and telephony");
        MainCategory components = mainCategoryRepository.findMainCategoryByName("Components");
        //SubCategories
        SubCategory s1 = new SubCategory("Mouses",peripherals);
        SubCategory s2 = new SubCategory("Headphones",peripherals);
        SubCategory s3 = new SubCategory("CPU Fans",components);
        SubCategory s4 = new SubCategory("Smartphones",smartphones_and_telephony);

        subCategoryRepository.save(s1);
        subCategoryRepository.save(s2);
        subCategoryRepository.save(s3);
        subCategoryRepository.save(s4);
    }

    // (String name, BigDecimal price, MainCategory mainCategory, SubCategory subCategory, byte[] mainImage, byte[] secondaryImage, String brand, boolean isRecommended, boolean isInteresting)

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
        Product p1 = new Product("Tempest X20W Vigilant Ratón Gaming Inalámbrico",new BigDecimal(49.99),m1,s1,MainImage,SecondaryImage,"Tempest",true,false);
        productRepository.save(p1);

        reader = getClass().getResourceAsStream("/static/ProductImages/tempest-ghs301-barbarian-auriculares-gaming-71-rgb-pc-ps4-42751c2c-1987-4ef8-9af6-efb4a0887053.jpg");
        MainImage = new byte[77215];
        reader.read(MainImage);
        reader = getClass().getResourceAsStream("/static/ProductImages/tempest-ghs301-barbarian-auriculares-gaming-71-rgb-pc-ps4-45521ba6-a86a-476c-b41c-b745ed768f49.jpg");
        SecondaryImage = new byte[77215];
        reader.read(SecondaryImage);
        Product p2 = new Product("Tempest GHS301 Barbarian Auriculares Gaming RGB 7.1 PC/PS4/PS5/Switch",new BigDecimal(49.99),m1,s2,MainImage,SecondaryImage,"Tempest",true,false);
        productRepository.save(p2);

        reader = getClass().getResourceAsStream("/static/ProductImages/4764-tempest-basic-cooler-4pipes-white-ventilador-cpu-120mm-foto.jpg");
        MainImage = new byte[77215];
        reader.read(MainImage);
        reader = getClass().getResourceAsStream("/static/ProductImages/182-tempest-basic-cooler-4pipes-white-ventilador-cpu-120mm-caracteristicas.jpg");
        SecondaryImage = new byte[77215];
        reader.read(SecondaryImage);
        Product p3 = new Product("Tempest Basic Cooler 4Pipes White Ventilador CPU 120mm",new BigDecimal(30),m2,s3,MainImage,SecondaryImage,"Tempest",true,false);
        productRepository.save(p3);

        reader = getClass().getResourceAsStream("/static/ProductImages/1241-xiaomi-redmi-note-9-pro-6-128gb-verde-tropical-libre.jpg");
        MainImage = new byte[77215];
        reader.read(MainImage);
        reader = getClass().getResourceAsStream("/static/ProductImages/3699-xiaomi-redmi-note-9-pro-6-128gb-verde-tropical-libre-mejor-precio.jpg");
        SecondaryImage = new byte[77215];
        reader.read(SecondaryImage);
        Product p4 = new Product("Xiaomi Redmi Note 9 Pro 6/64GB Verde Tropical Libre\n",new BigDecimal(226.22),m3,s4,MainImage,SecondaryImage,"Tempest",true,false);
        productRepository.save(p4);

    }

    @Test
    void populateDatabaseMainCategories2(){
        //MainCategories
        MainCategory m1 = new MainCategory("Selfcare");
        mainCategoryRepository.save(m1);
    }

    @Test
    void populateDatabaseSubCategories2(){
        MainCategory peripherals = mainCategoryRepository.findMainCategoryByName("Peripherals");
        MainCategory smartphones_and_telephony = mainCategoryRepository.findMainCategoryByName("Smartphones and telephony");
        MainCategory components = mainCategoryRepository.findMainCategoryByName("Components");
        MainCategory selfcare = mainCategoryRepository.findMainCategoryByName("Selfcare");
        //SubCategories2
        SubCategory s1 = new SubCategory("Speakers",peripherals);
        SubCategory s2 = new SubCategory("Sterilizers and disinfectants",selfcare);
        SubCategory s3 = new SubCategory("Monitors",peripherals);
        SubCategory s4 = new SubCategory("Towers",components);
        subCategoryRepository.save(s1);
        subCategoryRepository.save(s2);
        subCategoryRepository.save(s3);
        subCategoryRepository.save(s4);
    }



    @Test
    void oops(){
        MainCategory components = mainCategoryRepository.findMainCategoryByName("Components");
        //MainCategories
        SubCategory s1 = new SubCategory("Hard Drives",components);
        subCategoryRepository.save(s1);
    }

    @Test
    void populateDatabaseProducts2() throws IOException {
        //Products
        MainCategory m1 = mainCategoryRepository.findMainCategoryByName("Peripherals");
        MainCategory m2 = mainCategoryRepository.findMainCategoryByName("Components");
        MainCategory m3 = mainCategoryRepository.findMainCategoryByName("Smartphones and telephony");
        MainCategory m4 = mainCategoryRepository.findMainCategoryByName("Selfcare");

        SubCategory s1 = subCategoryRepository.findSubCategoryByName("Mouses");
        SubCategory s4 = subCategoryRepository.findSubCategoryByName("Smartphones");
        SubCategory s5 = subCategoryRepository.findSubCategoryByName("Speakers");
        SubCategory s6 = subCategoryRepository.findSubCategoryByName("Sterilizers and disinfectants");
        SubCategory s7 = subCategoryRepository.findSubCategoryByName("Monitors");
        SubCategory s8 = subCategoryRepository.findSubCategoryByName("Towers");
        SubCategory s9 = subCategoryRepository.findSubCategoryByName("Hard Drives");


        InputStream reader = getClass().getResourceAsStream("/static/ProductImages/logitech-g203-lightsync-raton-gaming-8000dpi-rgb-blanco.jpg");
        byte[] MainImage = new byte[77215];
        reader.read(MainImage);
        reader = getClass().getResourceAsStream("/static/ProductImages/logitech-g203-lightsync-raton-gaming-8000dpi-rgb-blanco-comprar.jpg");
        byte[] SecondaryImage = new byte[77215];
        reader.read(SecondaryImage);
        Product p1 = new Product("Logitech G203 Lightsync 2nd Gen Ratón Gaming 8000DPI RGB Blanco",new BigDecimal(22.99),m1,s1,MainImage,SecondaryImage,"Logitech",false,true);
        productRepository.save(p1);

        reader = getClass().getResourceAsStream("/static/ProductImages/logitech-speaker-system-z906-500w-5-1-thx-digital.jpg");
        MainImage = new byte[77215];
        reader.read(MainImage);
        reader = getClass().getResourceAsStream("/static/ProductImages/logitech-speaker-system-z906-500w-5-1-thx-digital-2.jpg");
        SecondaryImage = new byte[77215];
        reader.read(SecondaryImage);
        Product p2 = new Product("Logitech Speaker System Z906 500W 5.1 THX Digital",new BigDecimal(300),m1,s5,MainImage,SecondaryImage,"Logitech",false,true);
        productRepository.save(p2);

        reader = getClass().getResourceAsStream("/static/ProductImages/1167-xiaomi-youpin-lampara-de-esterilizacion-uv.jpg");
        MainImage = new byte[77215];
        reader.read(MainImage);
        reader = getClass().getResourceAsStream("/static/ProductImages/239-xiaomi-youpin-lampara-de-esterilizacion-uv-comprar.jpg");
        SecondaryImage = new byte[77215];
        reader.read(SecondaryImage);
        Product p3 = new Product("Xiaomi Youpin Lámpara de Esterilización UV",new BigDecimal(8.78),m4,s6,MainImage,SecondaryImage,"Xiaomi",false,true);
        productRepository.save(p3);

        reader = getClass().getResourceAsStream("/static/ProductImages/1282-newskill-icarus-ic274k-4i-27-led-ips-ultrahd-4k-144hz-adaptative-sync.jpg");
        MainImage = new byte[77215];
        reader.read(MainImage);
        reader = getClass().getResourceAsStream("/static/ProductImages/1281-newskill-icarus-rgb-27-led-fast-ips-qhd-180hz-g-sync-compatible-4d0a4630-a827-4677-a3e8-779ca291ff0f.jpg");
        SecondaryImage = new byte[77215];
        reader.read(SecondaryImage);
        Product p4 = new Product("Newskill Icarus IC274K-4I 27 LED IPS UltraHD 4K 144Hz Adaptative Sync",new BigDecimal(649.99),m4,s7,MainImage,SecondaryImage,"Newskill",false,true);
        productRepository.save(p4);

        reader = getClass().getResourceAsStream("/static/ProductImages/team-group-cardea-zero-z340-1tb-pcie-m2-gaming-ssd.jpg");
        MainImage = new byte[77215];
        reader.read(MainImage);
        reader = getClass().getResourceAsStream("/static/ProductImages/team-group-cardea-zero-z340-1tb-pcie-m2-gaming-ssd-comprar.jpg");
        SecondaryImage = new byte[77215];
        reader.read(SecondaryImage);
        Product p5 = new Product("Team Group Cardea Zero Z340 1TB PCIe M.2 Gaming SSD",new BigDecimal(136.98),m2,s9,MainImage,SecondaryImage,"Team Group",false,true);
        productRepository.save(p5);

        reader = getClass().getResourceAsStream("/static/ProductImages/msi-optix-g27cq4-27-led-wide-quadhd-165hz-freesync-curvo.jpg");
        MainImage = new byte[77215];
        reader.read(MainImage);
        reader = getClass().getResourceAsStream("/static/ProductImages/msi-optix-g27cq4-27-led-wide-quadhd-165hz-freesync-curvo-caracteristicas.jpg");
        SecondaryImage = new byte[77215];
        reader.read(SecondaryImage);
        Product p6 = new Product("MSI Optix G27CQ4 27 LED Wide QuadHD 165Hz FreeSync Curvo",new BigDecimal(332.77),m1,s7,MainImage,SecondaryImage,"MSI",false,true);
        productRepository.save(p6);

        reader = getClass().getResourceAsStream("/static/ProductImages/193-xiaomi-mi-11i-5g-8-128gb-negro-libre.jpg");
        MainImage = new byte[77215];
        reader.read(MainImage);
        reader = getClass().getResourceAsStream("/static/ProductImages/3424-xiaomi-mi-11i-5g-8-128gb-negro-libre-mejor-precio.jpg");
        SecondaryImage = new byte[77215];
        reader.read(SecondaryImage);
        Product p7 = new Product("Xiaomi Mi 11i 5G 8/128GB Negro Libre",new BigDecimal(478.99),m3,s4,MainImage,SecondaryImage,"Xiaomi",false,true);
        productRepository.save(p7);

        reader = getClass().getResourceAsStream("/static/ProductImages/1584-tempest-vapor-usb-30-con-ventana-rgb-negro.jpg");
        MainImage = new byte[77215];
        reader.read(MainImage);
        reader = getClass().getResourceAsStream("/static/ProductImages/6928-tempest-vapor-usb-30-con-ventana-rgb-negro-opiniones.jpg");
        SecondaryImage = new byte[77215];
        reader.read(SecondaryImage);
        Product p8 = new Product("Tempest Vapor USB 3.0 con Ventana RGB Negro",new BigDecimal(54.99),m2,s8,MainImage,SecondaryImage,"Tempest",false,true);
        productRepository.save(p8);


    }

    @Test
    void deleteDatabaseProducts(){
        productRepository.deleteAll();
    }

    @Test
    void addImagesToSubcategories() throws IOException {
        SubCategory s1 = subCategoryRepository.findSubCategoryByName("Mouses");
        SubCategory s4 = subCategoryRepository.findSubCategoryByName("Smartphones");
        SubCategory s5 = subCategoryRepository.findSubCategoryByName("Speakers");
        SubCategory s6 = subCategoryRepository.findSubCategoryByName("Sterilizers and disinfectants");
        SubCategory s7 = subCategoryRepository.findSubCategoryByName("Monitors");
        SubCategory s8 = subCategoryRepository.findSubCategoryByName("Towers");
        SubCategory s9 = subCategoryRepository.findSubCategoryByName("Hard Drives");

        InputStream reader = getClass().getResourceAsStream("/static/ProductImages/familia-teclados-768x504-producto.jpg");
        byte[] image = new byte[77215];
        reader.read(image);
        s1.setImage(image);
        subCategoryRepository.save(s1);

        reader = getClass().getResourceAsStream("/static/ProductImages/familia-smartphones-768x504-producto.jpg");
        image = new byte[77215];
        reader.read(image);
        s4.setImage(image);
        subCategoryRepository.save(s4);

        reader = getClass().getResourceAsStream("/static/ProductImages/familia-altavoces-768x504-producto.jpg");
        image = new byte[77215];
        reader.read(image);
        s5.setImage(image);
        subCategoryRepository.save(s5);

        reader = getClass().getResourceAsStream("/static/ProductImages/familia-monitores-768x504-producto.jpg");
        image = new byte[77215];
        reader.read(image);
        s7.setImage(image);
        subCategoryRepository.save(s7);

        reader = getClass().getResourceAsStream("/static/ProductImages/familia-torres_cajas-500x500-producto.jpg");
        image = new byte[77215];
        reader.read(image);
        s8.setImage(image);
        subCategoryRepository.save(s8);

        reader = getClass().getResourceAsStream("/static/ProductImages/familia-discos_duros-500x500-producto.jpg");
        image = new byte[77215];
        reader.read(image);
        s9.setImage(image);
        subCategoryRepository.save(s9);



    }

    @Test
    void AddImagesToSubcategories2() throws IOException {
        SubCategory s1 = subCategoryRepository.findSubCategoryByName("Headphones");
        SubCategory s2 = subCategoryRepository.findSubCategoryByName("CPU Fans");
        SubCategory s3 = subCategoryRepository.findSubCategoryByName("Smartphones");

        InputStream reader = getClass().getResourceAsStream("/static/ProductImages/familia-auriculares_gaming-768x504-producto.jpg");
        byte[] image = new byte[77215];
        reader.read(image);
        s1.setImage(image);
        subCategoryRepository.save(s1);

        reader = getClass().getResourceAsStream("/static/ProductImages/familia-ventiladores_pc-500x500-producto.jpg");
        image = new byte[77215];
        reader.read(image);
        s2.setImage(image);
        subCategoryRepository.save(s2);

        reader = getClass().getResourceAsStream("/static/ProductImages/familia-smartphones-768x504-producto.jpg");
        image = new byte[77215];
        reader.read(image);
        s3.setImage(image);
        subCategoryRepository.save(s3);

    }

}
