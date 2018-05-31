package com.cejet.pages.common;

import org.openqa.selenium.By;

import com.cejet.pages.CEJETBasePage;

public class CustomerDetailPage extends CEJETBasePage {
	public CustomerDetailPage() {
		super();
	

		addObject("CustomerInformation", By.xpath("(//span[contains(text(),'Customer Information')])[3]"));

		addObject("Attributes", By.xpath("(//span[contains(text(),'Attributes')])[5]"));
		addObject("Activity", By.xpath("(//span[contains(text(),'Activity')])"));
		addObject("PurchaseProfile", By.xpath("(//span[contains(text(),'Purchase Profile')])"));

		addObject("Segments", By.xpath("(//span[contains(text(),'Segments')])[5]"));

		addObject("CustomerEngagement", By.xpath(" //span[contains(text(),'Customer Engagement')]"));
		addObject("HomeImage", By.xpath("//*[@data-label='Home Trigger (Sales Associate)']"));
		
	
	}
}
