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
        SubCategory cpus = new SubCategory("Processors",components);
        SubCategory gpus = new SubCategory("Graphic Cards", components);
        SubCategory ram = new SubCategory("RAM", components);


        //subcategory images
        InputStream reader = getClass().getResourceAsStream("/static/ProductImages/familia-teclados-768x504-producto.jpg");
        byte[] image = new byte[77215];
        reader.read(image);
        mouses.setImage(image);

        reader = getClass().getResourceAsStream("/static/ProductImages/familia-smartphones-768x504-producto.jpg");
        image = new byte[77215];
        reader.read(image);
        smartphones.setImage(image);

        reader = getClass().getResourceAsStream("/static/ProductImages/familia-memorias_ram-500x500-producto.jpg");
        image = new byte[77215];
        reader.read(image);
        ram.setImage(image);

        reader = getClass().getResourceAsStream("/static/ProductImages/familia-procesadores-500x500-producto.jpg");
        image = new byte[77215];
        reader.read(image);
        cpus.setImage(image);

        reader = getClass().getResourceAsStream("/static/ProductImages/familia-tarjetas_graficas-500x500-producto.jpg");
        image = new byte[77215];
        reader.read(image);
        gpus.setImage(image);

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
        subCategoryRepository.save(ram);
        subCategoryRepository.save(cpus);
        subCategoryRepository.save(gpus);

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

        reader = getClass().getResourceAsStream("/static/ProductImages/1183-amd-ryzen-5-5600g-440ghz.jpg");
        MainImage = new byte[77215];
        reader.read(MainImage);
        reader = getClass().getResourceAsStream("/static/ProductImages/1183-amd-ryzen-5-5600g-440ghz.jpg");
        SecondaryImage = new byte[77215];
        reader.read(SecondaryImage);
        Product p17 = new Product("AMD Ryzen 5 5600G 4.40GHz",new BigDecimal(243.90),components,cpus,MainImage,SecondaryImage,"AMD",false,false);

        reader = getClass().getResourceAsStream("/static/ProductImages/191-intel-core-i7-12700k-50-ghz.jpg");
        MainImage = new byte[77215];
        reader.read(MainImage);
        reader = getClass().getResourceAsStream("/static/ProductImages/191-intel-core-i7-12700k-50-ghz.jpg");
        SecondaryImage = new byte[77215];
        reader.read(SecondaryImage);
        Product p18 = new Product("Intel Core i7-12700K 5.0 GHz",new BigDecimal(446.24),components,cpus,MainImage,SecondaryImage,"Intel",false,false);

        reader = getClass().getResourceAsStream("/static/ProductImages/1571-msi-geforce-rtx-3070-ti-ventus-3x-oc-8gb-gddr6x.jpg");
        MainImage = new byte[77215];
        reader.read(MainImage);
        reader = getClass().getResourceAsStream("/static/ProductImages/3611-msi-geforce-rtx-3070-ti-ventus-3x-oc-8gb-gddr6x-mejor-precio.jpg");
        SecondaryImage = new byte[77215];
        reader.read(SecondaryImage);
        Product p19 = new Product("MSI GeForce RTX 3070 Ti VENTUS 3X OC 8GB GDDR6X",new BigDecimal(899.99),components,gpus,MainImage,SecondaryImage,"MSI",false,true);

        reader = getClass().getResourceAsStream("/static/ProductImages/1228-powercolor-fighter-amd-radeon-rx-6600-8gb-gddr6.jpg");
        MainImage = new byte[77215];
        reader.read(MainImage);
        reader = getClass().getResourceAsStream("/static/ProductImages/253-powercolor-fighter-amd-radeon-rx-6600-8gb-gddr6-comprar.jpg");
        SecondaryImage = new byte[77215];
        reader.read(SecondaryImage);
        Product p20 = new Product("PowerColor FIGHTER AMD Radeon RX 6600 8GB GDDR6",new BigDecimal(479.90),components,gpus,MainImage,SecondaryImage,"PowerColor",false,false);

        reader = getClass().getResourceAsStream("/static/ProductImages/1.jpg");
        MainImage = new byte[77215];
        reader.read(MainImage);
        reader = getClass().getResourceAsStream("/static/ProductImages/2.jpg");
        SecondaryImage = new byte[77215];
        reader.read(SecondaryImage);
        Product p21 = new Product("Team Group Delta White RGB DDR4 3200 PC4-25600 16GB 2x8GB CL16",new BigDecimal(99.83),components,ram,MainImage,SecondaryImage,"Team Group",false,false);

        reader = getClass().getResourceAsStream("/static/ProductImages/1302-kingston-fury-beast-ddr4-2666-mhz-8gb-cl16.jpg");
        MainImage = new byte[77215];
        reader.read(MainImage);
        reader = getClass().getResourceAsStream("/static/ProductImages/3514-kingston-fury-beast-ddr4-2666-mhz-8gb-cl16-mejor-precio.jpg");
        SecondaryImage = new byte[77215];
        reader.read(SecondaryImage);
        Product p22 = new Product("Kingston FURY Beast DDR4 2666 MHz 8GB CL16",new BigDecimal(34.80),components,ram,MainImage,SecondaryImage,"Kingston",false,false);

        reader = getClass().getResourceAsStream("/static/ProductImages/134-sony-pack-playstation-5-edicion-digital-dualsense-midnight-black.jpg");
        MainImage = new byte[77215];
        reader.read(MainImage);
        reader = getClass().getResourceAsStream("/static/ProductImages/7657-sony-pack-playstation-5-edicion-digital-dualsense-midnight-black-review.jpg");
        SecondaryImage = new byte[77215];
        reader.read(SecondaryImage);
        Product p23 = new Product("Sony Pack PlayStation 5 Edición Digital + DualSense Midnight Black",new BigDecimal(469.90),gaming,playstation,MainImage,SecondaryImage,"Sony",false,true);

        reader = getClass().getResourceAsStream("/static/ProductImages/1144-microsoft-xbox-series-s-512gb.jpg");
        MainImage = new byte[77215];
        reader.read(MainImage);
        reader = getClass().getResourceAsStream("/static/ProductImages/2233-microsoft-xbox-series-s-512gb-comprar.jpg");
        SecondaryImage = new byte[77215];
        reader.read(SecondaryImage);
        Product p24 = new Product("Microsoft Xbox Series S 512GB",new BigDecimal(299),gaming,xbox,MainImage,SecondaryImage,"Microsoft",false,true);

        reader = getClass().getResourceAsStream("/static/ProductImages/consola-nintendo-switch-1351124-81-l.jpg");
        MainImage = new byte[77215];
        reader.read(MainImage);
        reader = getClass().getResourceAsStream("/static/ProductImages/1 (1).jpg");
        SecondaryImage = new byte[77215];
        reader.read(SecondaryImage);
        Product p25 = new Product("Nintendo Switch Azul Neón/Rojo Neón V2",new BigDecimal(292.98),gaming,nintendo,MainImage,SecondaryImage,"Nintendo",false,true);

        reader = getClass().getResourceAsStream("/static/ProductImages/1100-hp-15s-fq2159ns-intel-core-i3-1115g4-8gb-256gb-ssd-156.jpg");
        MainImage = new byte[77215];
        reader.read(MainImage);
        reader = getClass().getResourceAsStream("/static/ProductImages/2730-hp-15s-fq2159ns-intel-core-i3-1115g4-8gb-256gb-ssd-156-comprar.jpg");
        SecondaryImage = new byte[77215];
        reader.read(SecondaryImage);
        Product p26 = new Product("HP 15S-fq2159ns Intel Core i3-1115G4/8GB/256GB SSD/15.6",new BigDecimal(479),computers,laptops,MainImage,SecondaryImage,"HP",false,false);

        reader = getClass().getResourceAsStream("/static/ProductImages/1692-msi-mag-codex-5-11tc-460eu-intel-core-i5-11400f-16gb-512gb-ssd-rtx-3060.jpg");
        MainImage = new byte[77215];
        reader.read(MainImage);
        reader = getClass().getResourceAsStream("/static/ProductImages/2242-msi-mag-codex-5-11tc-460eu-intel-core-i5-11400f-16gb-512gb-ssd-rtx-3060-comprar.jpg");
        SecondaryImage = new byte[77215];
        reader.read(SecondaryImage);
        Product p27 = new Product("MSI MAG Codex 5 11TG-814EU Intel Core i5-11400F/16GB/512GB SSD/RTX 3060 Ti",new BigDecimal(1499),computers,desktops,MainImage,SecondaryImage,"MSI",false,false);

        reader = getClass().getResourceAsStream("/static/ProductImages/1810-sony-kd65x80jpaep-65-led-ultrahd-4k-hdr.jpg");
        MainImage = new byte[77215];
        reader.read(MainImage);
        reader = getClass().getResourceAsStream("/static/ProductImages/2849-sony-kd65x80jpaep-65-led-ultrahd-4k-hdr-comprar.jpg");
        SecondaryImage = new byte[77215];
        reader.read(SecondaryImage);
        Product p28 = new Product("Sony KD65X80JPAEP 65 LED UltraHD 4K HDR",new BigDecimal(948.99),audiovisual,tVs,MainImage,SecondaryImage,"Sony",false,false);

        reader = getClass().getResourceAsStream("/static/ProductImages/1176-yamaha-a-s501-amplificador-integrado-2x120w-negro.jpg");
        MainImage = new byte[77215];
        reader.read(MainImage);
        reader = getClass().getResourceAsStream("/static/ProductImages/2637-yamaha-a-s501-amplificador-integrado-2x120w-negro-comprar.jpg");
        SecondaryImage = new byte[77215];
        reader.read(SecondaryImage);
        Product p29 = new Product("Yamaha A-S501 Amplificador Integrado 2x120W Negro",new BigDecimal(456.91),audiovisual,homeCinema,MainImage,SecondaryImage,"Yamaha",false,false);

        reader = getClass().getResourceAsStream("/static/ProductImages/1305-samsung-hw-a430-zf-barra-de-sonido-21-bluetooth-270w.jpg");
        MainImage = new byte[77215];
        reader.read(MainImage);
        reader = getClass().getResourceAsStream("/static/ProductImages/1305-samsung-hw-a430-zf-barra-de-sonido-21-bluetooth-270w.jpg");
        SecondaryImage = new byte[77215];
        reader.read(SecondaryImage);
        Product p30 = new Product("Samsung HW-A430/ZF Barra de Sonido 2.1 Bluetooth 270W",new BigDecimal(143.91),audiovisual,tvSpeakers,MainImage,SecondaryImage,"Samsung",false,false);


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
        productRepository.save(p17);
        productRepository.save(p18);
        productRepository.save(p19);
        productRepository.save(p20);
        productRepository.save(p21);
        productRepository.save(p22);
        productRepository.save(p23);
        productRepository.save(p24);
        productRepository.save(p25);
        productRepository.save(p26);
        productRepository.save(p27);
        productRepository.save(p28);
        productRepository.save(p29);
        productRepository.save(p30);


    }



}
