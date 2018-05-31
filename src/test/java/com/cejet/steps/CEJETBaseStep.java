package com.cejet.steps;

import org.apache.log4j.Logger;

import com.cejet.util.CEJETWebdriverBase;
import com.core.util.CommonUtility;

;

public abstract class CEJETBaseStep extends CEJETWebdriverBase {

	 public CommonUtility commUtil = new CommonUtility();
	
	public Logger logger = Logger.getLogger(this.getClass().getName());
}
