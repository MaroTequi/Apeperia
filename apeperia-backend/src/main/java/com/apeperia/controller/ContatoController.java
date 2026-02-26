package com.apeperia.controller;

import com.apeperia.model.ContatoRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/contato")
public class ContatoController {

    @PostMapping
    public ResponseEntity<Map<String, String>> enviarContato(@RequestBody ContatoRequest contato) {
        System.out.printf("Contato recebido: %s <%s>%n", contato.nome(), contato.email());
        System.out.printf("Mensagem: %s%n", contato.mensagem());

        return ResponseEntity.ok(Map.of(
                "status", "sucesso",
                "mensagem", "Contato recebido com sucesso!"
        ));
    }
}
