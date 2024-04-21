import chromedriver_autoinstaller
import selenium
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from bs4 import BeautifulSoup
from collections import defaultdict
from datetime import datetime
import csv
chromedriver_autoinstaller.install()

# Initialize the WebDriver
driver = webdriver.Chrome()

# Open the website
driver.get("https://calendar.umd.edu")

# Loop to click the "Show More" button until it's not present
while True:
    try:
        show_more_button = WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable((By.XPATH, '//*[@id="list"]/div[2]/umd-show-more'))
        )
        show_more_button.click()
    except:
        break

all_events = defaultdict(list)

# Get the HTML code of the page
html_code = driver.page_source

# Parse the HTML code with BeautifulSoup
soup = BeautifulSoup(html_code, 'html.parser')
dates = soup.find_all(class_='event-date-tag')

content = soup.find_all('h3', class_='event-title')
ind = 1
for event in content:
    span_element = event.find('span')
    all_events[ind].append(span_element.text)
    ind += 1

ind = 1
desc = soup.find_all('div', class_='event-summary')
for event in desc:
    all_events[ind].append(event.text)
    ind += 1

times = soup.find_all('umd-calendar-flags')
ind= 1
start_ind = 2
for event in times:
    days = event.find_all('time')

    start_datetime_str = days[0]['datetime']
    end_datetime_str = days[1]['datetime']
    end_datetime_str = days[1]['datetime']



    # Parse the datetime strings into datetime objects
    start_datetime = datetime.fromisoformat(start_datetime_str.split('T')[0])
    end_datetime = datetime.fromisoformat(end_datetime_str.split('T')[0])
    if (start_datetime.date() == end_datetime.date()):
        end_datetime = start_datetime
        start_ind = 1

    # Format the datetime objects into readable date strings
    start_date = start_datetime.strftime('%a %b %d')
    end_date = end_datetime.strftime('%a %b %d')
    all_events[ind].append(start_date)
    all_events[ind].append(end_date)

    start_time = days[start_ind]['datetime']
    start_time = datetime.fromisoformat(start_time.split('T')[0])
    time_str = start_time.strftime('%I:%M %p')

    all_events[ind].append(time_str)
    ind += 1


# Close the browser
driver.quit()


# Define the CSV file path
csv_file_path = 'events.csv'

# Open the CSV file in write mode
with open(csv_file_path, 'w', newline='', encoding='utf-8') as csvfile:
    # Define the CSV writer
    csv_writer = csv.writer(csvfile)

    # Write the header row
    csv_writer.writerow(['Event Name', 'Description', 'Start Date', 'End Date', 'Start Time'])

    # Write each event's data to the CSV file
    for event_data in all_events.values():
        csv_writer.writerow(event_data)

print("CSV file saved successfully:", csv_file_path)