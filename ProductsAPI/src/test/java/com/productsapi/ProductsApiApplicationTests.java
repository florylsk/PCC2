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
import java.util.Optional;

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
    void populateDatabase() throws IOException {
        //MainCategories
        MainCategory peripherals = new MainCategory("Peripherals");
        MainCategory components= new MainCategory("Components");
        MainCategory telephony= new MainCategory("Telephony");
        MainCategory computers = new MainCategory("Computers");
        MainCategory gaming= new MainCategory("Gaming");
        MainCategory audiovisual = new MainCategory("Audiovisual");
        mainCategoryRepository.save(peripherals);
        mainCategoryRepository.save(components);
        mainCategoryRepository.save(telephony);
        mainCategoryRepository.save(computers);
        mainCategoryRepository.save(gaming);
        mainCategoryRepository.save(audiovisual);

        //SubCategories
        SubCategory mouses = new SubCategory("Mouses",peripherals);
        SubCategory headphones= new SubCategory("Headphones",peripherals);
        SubCategory cpuFans= new SubCategory("CPU Fans",components);
        SubCategory smartphones = new SubCategory("Smartphones",telephony);
        SubCategory speakers= new SubCategory("Speakers",peripherals);
        SubCategory monitors= new SubCategory("Monitors",peripherals);
        SubCategory towers = new SubCategory("Towers",components);
        SubCategory hardDrives= new SubCategory("Hard Drives",components);
        SubCategory laptops = new SubCategory("Laptops",computers);
        SubCategory desktops= new SubCategory("Desktops",computers);
        SubCategory tVs = new SubCategory("TVs",audiovisual);
        SubCategory homeCinema= new SubCategory("Home Cinema",audiovisual);
        SubCategory tvSpeakers= new SubCategory("TV Speakers",audiovisual);
        SubCategory playstation= new SubCategory("Playstation",gaming);
        SubCategory xbox= new SubCategory("Xbox",gaming);
        SubCategory nintendo= new SubCategory("Nintendo",gaming);

        //subcategory images
        InputStream reader = getClass().getResourceAsStream("/static/ProductImages/familia-teclados-768x504-producto.jpg");
        byte[] image = new byte[77215];
        reader.read(image);
        mouses.setImage(image);

        reader = getClass().getResourceAsStream("/static/ProductImages/familia-smartphones-768x504-producto.jpg");
        image = new byte[77215];
        reader.read(image);
        smartphones.setImage(image);

        reader = getClass().getResourceAsStream("/static/ProductImages/familia-altavoces-768x504-producto.jpg");
        image = new byte[77215];
        reader.read(image);
        speakers.setImage(image);

        reader = getClass().getResourceAsStream("/static/ProductImages/familia-monitores-768x504-producto.jpg");
        image = new byte[77215];
        reader.read(image);
        monitors.setImage(image);

        reader = getClass().getResourceAsStream("/static/ProductImages/familia-torres_cajas-500x500-producto.jpg");
        image = new byte[77215];
        reader.read(image);
        towers.setImage(image);

        reader = getClass().getResourceAsStream("/static/ProductImages/familia-discos_duros-500x500-producto.jpg");
        image = new byte[77215];
        reader.read(image);
        hardDrives.setImage(image);

        reader = getClass().getResourceAsStream("/static/ProductImages/familia-auriculares_gaming-768x504-producto.jpg");
        image = new byte[77215];
        reader.read(image);
        headphones.setImage(image);

        reader = getClass().getResourceAsStream("/static/ProductImages/familia-ventiladores_pc-500x500-producto.jpg");
        image = new byte[77215];
        reader.read(image);
        cpuFans.setImage(image);

        reader = getClass().getResourceAsStream("/static/ProductImages/familia-smartphones-768x504-producto.jpg");
        image = new byte[77215];
        reader.read(image);
        smartphones.setImage(image);

        reader = getClass().getResourceAsStream("/static/ProductImages/familia-portatiles_gaming-768x504-producto.jpg");
        image = new byte[77215];
        reader.read(image);
        laptops.setImage(image);

        reader = getClass().getResourceAsStream("/static/ProductImages/familia-pc_tipo-768x504-producto.jpg");
        image = new byte[77215];
        reader.read(image);
        desktops.setImage(image);

        reader = getClass().getResourceAsStream("/static/ProductImages/familia-televisores-768x504-tematica.jpg");
        image = new byte[77215];
        reader.read(image);
        tVs.setImage(image);

        reader = getClass().getResourceAsStream("/static/ProductImages/familia-home_cinema-768x504-producto.jpg");
        image = new byte[77215];
        reader.read(image);
        homeCinema.setImage(image);

        reader = getClass().getResourceAsStream("/static/ProductImages/familia-altavoces_barras_sonido-768x504-tematica.jpg");
        image = new byte[77215];
        reader.read(image);
        tvSpeakers.setImage(image);

        reader = getClass().getResourceAsStream("/static/ProductImages/banner-playstation-500.png");
        image = new byte[130000];
        reader.read(image);
        playstation.setImage(image);

        reader = getClass().getResourceAsStream("/static/ProductImages/banner-xbox-500.png");
        image = new byte[130000];
        reader.read(image);
        xbox.setImage(image);

        reader = getClass().getResourceAsStream("/static/ProductImages/banner-nintendo-500.png");
        image = new byte[130000];
        reader.read(image);
        nintendo.setImage(image);

        subCategoryRepository.save(mouses);
        subCategoryRepository.save(headphones);
        subCategoryRepository.save(cpuFans);
        subCategoryRepository.save(smartphones);
        subCategoryRepository.save(speakers);
        subCategoryRepository.save(monitors);
        subCategoryRepository.save(towers);
        subCategoryRepository.save(hardDrives);
        subCategoryRepository.save(laptops);
        subCategoryRepository.save(desktops);
        subCategoryRepository.save(tVs);
        subCategoryRepository.save(tvSpeakers);
        subCategoryRepository.save(homeCinema);
        subCategoryRepository.save(playstation);
        subCategoryRepository.save(xbox);
        subCategoryRepository.save(nintendo);

        //products
        reader = getClass().getResourceAsStream("/static/ProductImages/1667-tempest-x20w-vigilant-raton-gaming-inalambrico-opiniones.jpg");
        byte[] MainImage = new byte[77215];
        reader.read(MainImage);
        reader = getClass().getResourceAsStream("/static/ProductImages/1538-tempest-x20w-vigilant-raton-gaming-inalambrico.jpg");
        byte[] SecondaryImage = new byte[77215];
        reader.read(SecondaryImage);
        Product p1 = new Product("Tempest X20W Vigilant Ratón Gaming Inalámbrico",new BigDecimal(49.99),peripherals,mouses,MainImage,SecondaryImage,"Tempest",true,true);

        reader = getClass().getResourceAsStream("/static/ProductImages/tempest-ghs301-barbarian-auriculares-gaming-71-rgb-pc-ps4-42751c2c-1987-4ef8-9af6-efb4a0887053.jpg");
        MainImage = new byte[77215];
        reader.read(MainImage);
        reader = getClass().getResourceAsStream("/static/ProductImages/tempest-ghs301-barbarian-auriculares-gaming-71-rgb-pc-ps4-45521ba6-a86a-476c-b41c-b745ed768f49.jpg");
        SecondaryImage = new byte[77215];
        reader.read(SecondaryImage);
        Product p2 = new Product("Tempest GHS301 Barbarian Auriculares Gaming RGB 7.1 PC/PS4/PS5/Switch",new BigDecimal(49.99),peripherals,headphones,MainImage,SecondaryImage,"Tempest",true,false);

        reader = getClass().getResourceAsStream("/static/ProductImages/4764-tempest-basic-cooler-4pipes-white-ventilador-cpu-120mm-foto.jpg");
        MainImage = new byte[77215];
        reader.read(MainImage);
        reader = getClass().getResourceAsStream("/static/ProductImages/182-tempest-basic-cooler-4pipes-white-ventilador-cpu-120mm-caracteristicas.jpg");
        SecondaryImage = new byte[77215];
        reader.read(SecondaryImage);
        Product p3 = new Product("Tempest Basic Cooler 4Pipes White Ventilador CPU 120mm",new BigDecimal(30),components,cpuFans,MainImage,SecondaryImage,"Tempest",true,false);


        reader = getClass().getResourceAsStream("/static/ProductImages/msi-optix-g27cq4-27-led-wide-quadhd-165hz-freesync-curvo.jpg");
        MainImage = new byte[77215];
        reader.read(MainImage);
        reader = getClass().getResourceAsStream("/static/ProductImages/msi-optix-g27cq4-27-led-wide-quadhd-165hz-freesync-curvo-caracteristicas.jpg");
        SecondaryImage = new byte[77215];
        reader.read(SecondaryImage);
        Product p6 = new Product("MSI Optix G27CQ4 27 LED Wide QuadHD 165Hz FreeSync Curvo",new BigDecimal(332.77),peripherals,monitors,MainImage,SecondaryImage,"MSI",false,true);


        reader = getClass().getResourceAsStream("/static/ProductImages/logitech-g203-lightsync-raton-gaming-8000dpi-rgb-blanco.jpg");
        MainImage = new byte[77215];
        reader.read(MainImage);
        reader = getClass().getResourceAsStream("/static/ProductImages/logitech-g203-lightsync-raton-gaming-8000dpi-rgb-blanco-comprar.jpg");
        SecondaryImage = new byte[77215];
        reader.read(SecondaryImage);
        Product p9 = new Product("Logitech G203 Lightsync 2nd Gen Ratón Gaming 8000DPI RGB Blanco",new BigDecimal(22.99),peripherals,mouses,MainImage,SecondaryImage,"Logitech",false,true);

        reader = getClass().getResourceAsStream("/static/ProductImages/logitech-speaker-system-z906-500w-5-1-thx-digital.jpg");
        MainImage = new byte[77215];
        reader.read(MainImage);
        reader = getClass().getResourceAsStream("/static/ProductImages/logitech-speaker-system-z906-500w-5-1-thx-digital-2.jpg");
        SecondaryImage = new byte[77215];
        reader.read(SecondaryImage);
        Product p10 = new Product("Logitech Speaker System Z906 500W 5.1 THX Digital",new BigDecimal(300),peripherals,speakers,MainImage,SecondaryImage,"Logitech",false,true);

        reader = getClass().getResourceAsStream("/static/ProductImages/1241-xiaomi-redmi-note-9-pro-6-128gb-verde-tropical-libre.jpg");
        MainImage = new byte[77215];
        reader.read(MainImage);
        reader = getClass().getResourceAsStream("/static/ProductImages/3699-xiaomi-redmi-note-9-pro-6-128gb-verde-tropical-libre-mejor-precio.jpg");
        SecondaryImage = new byte[77215];
        reader.read(SecondaryImage);
        Product p11 = new Product("Xiaomi Redmi Note 9 Pro 6/64GB Verde Tropical Libre\n",new BigDecimal(226.22),telephony,smartphones,MainImage,SecondaryImage,"Xiaomi",true,false);

        reader = getClass().getResourceAsStream("/static/ProductImages/1282-newskill-icarus-ic274k-4i-27-led-ips-ultrahd-4k-144hz-adaptative-sync.jpg");
        MainImage = new byte[77215];
        reader.read(MainImage);
        reader = getClass().getResourceAsStream("/static/ProductImages/1281-newskill-icarus-rgb-27-led-fast-ips-qhd-180hz-g-sync-compatible-4d0a4630-a827-4677-a3e8-779ca291ff0f.jpg");
        SecondaryImage = new byte[77215];
        reader.read(SecondaryImage);
        Product p12 = new Product("Newskill Icarus IC274K-4I 27 LED IPS UltraHD 4K 144Hz Adaptative Sync",new BigDecimal(649.99),peripherals,monitors,MainImage,SecondaryImage,"Newskill",false,true);

        reader = getClass().getResourceAsStream("/static/ProductImages/team-group-cardea-zero-z340-1tb-pcie-m2-gaming-ssd.jpg");
        MainImage = new byte[77215];
        reader.read(MainImage);
        reader = getClass().getResourceAsStream("/static/ProductImages/team-group-cardea-zero-z340-1tb-pcie-m2-gaming-ssd-comprar.jpg");
        SecondaryImage = new byte[77215];
        reader.read(SecondaryImage);
        Product p13 = new Product("Team Group Cardea Zero Z340 1TB PCIe M.2 Gaming SSD",new BigDecimal(136.98),components,hardDrives,MainImage,SecondaryImage,"Team Group",false,true);


        reader = getClass().getResourceAsStream("/static/ProductImages/193-xiaomi-mi-11i-5g-8-128gb-negro-libre.jpg");
        MainImage = new byte[77215];
        reader.read(MainImage);
        reader = getClass().getResourceAsStream("/static/ProductImages/3424-xiaomi-mi-11i-5g-8-128gb-negro-libre-mejor-precio.jpg");
        SecondaryImage = new byte[77215];
        reader.read(SecondaryImage);
        Product p15 = new Product("Xiaomi Mi 11i 5G 8/128GB Negro Libre",new BigDecimal(478.99),telephony,smartphones,MainImage,SecondaryImage,"Xiaomi",false,true);

        reader = getClass().getResourceAsStream("/static/ProductImages/1584-tempest-vapor-usb-30-con-ventana-rgb-negro.jpg");
        MainImage = new byte[77215];
        reader.read(MainImage);
        reader = getClass().getResourceAsStream("/static/ProductImages/6928-tempest-vapor-usb-30-con-ventana-rgb-negro-opiniones.jpg");
        SecondaryImage = new byte[77215];
        reader.read(SecondaryImage);
        Product p16 = new Product("Tempest Vapor USB 3.0 con Ventana RGB Negro",new BigDecimal(54.99),components,towers,MainImage,SecondaryImage,"Tempest",false,true);
        productRepository.save(p1);
        productRepository.save(p2);
        productRepository.save(p3);
        productRepository.save(p6);
        productRepository.save(p9);
        productRepository.save(p10);
        productRepository.save(p11);
        productRepository.save(p12);
        productRepository.save(p13);
        productRepository.save(p15);
        productRepository.save(p16);

    }



}
