from selenium import webdriver
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By

# driver = webdriver.Firefox()
options = webdriver.FirefoxOptions()
server = 'http://127.0.0.1:4444/wd/hub'

driver = webdriver.Remote(command_executor=server, options=options)
driver.get("http://localhost:3000")
fcp_value_element = WebDriverWait(driver, 10).until(
    EC.presence_of_element_located((By.ID, "100_title"))
)
print(fcp_value_element.text) 
driver.quit()