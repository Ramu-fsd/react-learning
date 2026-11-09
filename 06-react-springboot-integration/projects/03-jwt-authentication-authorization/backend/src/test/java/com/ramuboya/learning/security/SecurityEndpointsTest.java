package com.ramuboya.learning.security;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest(properties = "spring.security.oauth2.resourceserver.jwt.issuer-uri=https://issuer.example.test")
@AutoConfigureMockMvc
class SecurityEndpointsTest {
    @Autowired MockMvc mvc;

    @Test
    void publicEndpointIsAccessible() throws Exception {
        mvc.perform(get("/api/public/info"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.application").value("Northstar Operations API"));
    }

    @Test
    void protectedEndpointRequiresAuthentication() throws Exception {
        mvc.perform(get("/api/me")).andExpect(status().isUnauthorized());
    }

    @Test
    void operationsRequiresReadScope() throws Exception {
        mvc.perform(get("/api/operations")
                        .with(SecurityMockMvcRequestPostProcessors.jwt()
                                .jwt(jwt -> jwt.claim("scope", "operations.read"))))
                .andExpect(status().isOk());
    }

    @Test
    void operationsDeniedWithoutReadScope() throws Exception {
        mvc.perform(get("/api/operations")
                        .with(SecurityMockMvcRequestPostProcessors.jwt()
                                .jwt(jwt -> jwt.claim("scope", "profile"))))
                .andExpect(status().isForbidden());
    }
}
