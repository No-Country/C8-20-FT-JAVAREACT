package com.c820ftjavareact.ecommerce.dto;

public class MensajeCloudinary {
    private String mensaje;
    public MensajeCloudinary(String mensaje) {
        this.mensaje = mensaje;
    }


    public String getMensaje() {
        return mensaje;
    }
    public void setMensaje(String mensaje) {
        this.mensaje = mensaje;
    }
}
