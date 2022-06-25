package com.example.app2;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/app")
public class Controller
{
    @GetMapping("/")
    public String hello(){
        return "hello world..";
    }
}
