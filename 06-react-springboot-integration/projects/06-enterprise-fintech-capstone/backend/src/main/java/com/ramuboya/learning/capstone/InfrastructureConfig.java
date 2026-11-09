package com.ramuboya.learning.capstone;
import org.apache.kafka.clients.admin.NewTopic;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.config.TopicBuilder;
import org.springframework.web.servlet.config.annotation.*;
@Configuration public class InfrastructureConfig implements WebMvcConfigurer {
 @Bean NewTopic acceptedTopic(){return TopicBuilder.name("payment-accepted").partitions(3).replicas(1).build();}
 @Override public void addCorsMappings(CorsRegistry r){r.addMapping("/api/**").allowedOrigins("http://localhost:5178").allowedMethods("GET","POST","OPTIONS").allowedHeaders("*");}
}
