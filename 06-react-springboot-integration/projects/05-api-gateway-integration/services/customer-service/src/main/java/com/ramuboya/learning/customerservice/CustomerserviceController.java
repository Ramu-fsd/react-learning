package com.ramuboya.learning.customerservice;
import org.springframework.web.bind.annotation.*;
import java.util.*;
@RestController @RequestMapping("/api/customers")
public class CustomerserviceController {
 @GetMapping public List<Map<String,String>> list(){return List.of(Map.of("id","CUS-1001","name","Aarav Sharma","tier","PREMIER"),Map.of("id","CUS-1002","name","Diya Reddy","tier","STANDARD"),Map.of("id","CUS-1003","name","Kabir Mehta","tier","PREMIER"));}
}
