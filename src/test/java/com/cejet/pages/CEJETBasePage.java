package com.cejet.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import com.cejet.util.CEJETWebdriverBase;
import com.core.base.CoreBasePage;





public class CEJETBasePage extends CoreBasePage {
	static WebDriver driver;
	
	public CEJETBasePage() {
	super(driver =CEJETWebdriverBase.getCurrentDriver());
		
}

}
