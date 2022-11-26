package com.c820ftjavareact.ecommerce;
import com.cloudinary.*;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.annotation.PostConstruct;
import java.io.File;
import java.io.IOException;
import java.util.TimeZone;
import com.cloudinary.utils.ObjectUtils;
import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.util.ObjectUtils;

import java.util.Map;
@SpringBootApplication
public class ECommerceApplication {
	//@PostConstruct
	//public void init(){
		//TimeZone.setDefault(TimeZone.getTimeZone("UTC-03:00"));
	//}

	public static void main(String[] args) throws IOException {
		SpringApplication.run(ECommerceApplication.class, args);

	Cloudinary cloudinary = new Cloudinary(ObjectUtils.asMap(
			"cloud_name", "my_cloud_name",
			"api_key", "my_api_key",
			"api_secret", "my_api_secret",
			"secure", true));
	File file = new File("my_image.jpg");
	Map uploadResult = cloudinary.uploader().upload(file, ObjectUtils.emptyMap());

}
}