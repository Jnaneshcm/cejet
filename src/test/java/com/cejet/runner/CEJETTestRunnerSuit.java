package com.cejet.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(format = { "pretty", "html:target/cucumber", "json:target/cucumber-report.json" }, glue = {
		"com.cejet.steps" }, features = { "features/CEJET.feature" }, tags = {})
public class CEJETTestRunnerSuit {

}
