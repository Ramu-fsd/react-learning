package com.ramuboya.learning.accountservice;
import org.springframework.web.bind.annotation.*;
import java.util.*;
@RestController @RequestMapping("/api/accounts")
public class AccountserviceController {
 @GetMapping public List<Map<String,String>> list(){return List.of(Map.of("id","ACC-2001","type","CURRENT","maskedNumber","•••• 4821","availableBalance","18450.75 USD"),Map.of("id","ACC-2002","type","SAVINGS","maskedNumber","•••• 9034","availableBalance","42780.20 USD"));}
}
