package com.NaWaPark.Home.Controller;


import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
@RequestMapping("/")
public class HomeController {

    @GetMapping("test")
    public String home(){
        log.info("TEST");
        return "Hello";
    }


}