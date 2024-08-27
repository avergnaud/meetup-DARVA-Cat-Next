from selenium import webdriver
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException

driver = webdriver.Firefox()
driver.get("http://localhost:3000")

print(driver.title)

# https://www.selenium.dev/selenium/docs/api/py/webdriver_support/selenium.webdriver.support.expected_conditions.html
try:
    fcp_value_element = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "fcp-value"))
    )
    print(fcp_value_element.text) 
except NoSuchElementException:
    print("fcp-value NOT found") 

driver.close()