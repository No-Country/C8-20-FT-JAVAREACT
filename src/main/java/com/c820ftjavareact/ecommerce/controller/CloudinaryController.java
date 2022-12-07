package com.c820ftjavareact.ecommerce.controller;
import com.c820ftjavareact.ecommerce.entity.Image;
import com.c820ftjavareact.ecommerce.dto.MensajeCloudinary;
import com.c820ftjavareact.ecommerce.service.CloudinaryService;
import com.c820ftjavareact.ecommerce.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.util.List;
import java.util.Map;
import lombok.Getter;
import lombok.Setter;

@RestController
@RequestMapping("/cloudinary")
@CrossOrigin
public class CloudinaryController {
    @Getter
    @Setter
    @Autowired
    CloudinaryService cloudinaryService;

    @Autowired
    ImageService imageService;

    @GetMapping("/list")
    public ResponseEntity<List<Image>> list(){
        List<Image> list = imageService.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }

    @PostMapping("/upload")
    public ResponseEntity<?> upload(@RequestParam MultipartFile multipartFile) throws IOException {
        BufferedImage bi = ImageIO.read(multipartFile.getInputStream());
        if(bi == null){
            return new ResponseEntity(new MensajeCloudinary("image no valida"), HttpStatus.BAD_REQUEST);
        }
        Map result = cloudinaryService.upload(multipartFile);
        Image image  =
                new Image((String)result.get("original_filename"),
                        (String)result.get("url"),
                        (String)result.get("public_id"));
        imageService.save(image);
        return new ResponseEntity(new MensajeCloudinary("image ok "), HttpStatus.OK);
    }
@DeleteMapping("/delete/{id}") //piblic_id=id
    public  ResponseEntity<?> delete(@PathVariable("id") int id)throws IOException{
    if(!imageService.exists(id))
        return new ResponseEntity(new MensajeCloudinary("no exist"), HttpStatus.NOT_FOUND);
    Image image = imageService.getOne(id).get();
        Map result= cloudinaryService.delete(image.getImagenId());
    imageService.delete(id);
    return new ResponseEntity(new MensajeCloudinary("image delete"), HttpStatus.OK);


}
}
