package com.cejet.pages.common;

import org.openqa.selenium.By;

import com.cejet.pages.CEJETBasePage;

public class LoginPage extends CEJETBasePage {
	public LoginPage() {
		super();
	
		addObject("Password", By.id("Password"));
		addObject("ViewProject", By.xpath("//div[contains(text(),'VIEW PROJECT')]"));
		
	
	}
}
