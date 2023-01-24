import cv2, time
import pandas as panda
from pandas.io import sql
from datetime import datetime
import requests
import base64

url = 'http://localhost:3002/motion' 
  
static_back = None
motion_list = [ None, None ]
times = []
imagedata = None
df = panda.DataFrame(columns = ["Start", "End"])

video = cv2.VideoCapture(0)

def send(start, end, frame):
    assert frame is not None
    payload = {'start': str(start),
            'end': str(end),
            'photo': frame}

    requests.post(url, data=payload)

saved = False
def test_save(image_data):
	global saved
    
	if not saved:
		cv2.imshow('captured', image_data)
		saved = True

def convertToBinaryData(filename):
    # Convert digital data to binary format
    with open(filename, 'rb') as file:
        imageBase64 = base64.b64encode(file.read())
    return imageBase64.decode('utf-8')

# Infinite while loop to treat stack of image as video
while True:
    # Reading frame(image) from video
    check, frame = video.read()
  
    # Initializing motion = 0(no motion)
    motion = 0
  
    # Converting color image to gray_scale image
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
  
    # Converting gray scale image to GaussianBlur 
    # so that change can be find easily
    gray = cv2.GaussianBlur(gray, (21, 21), 0)
  
    # In first iteration we assign the value 
    # of static_back to our first frame
    if static_back is None:
        static_back = gray
        continue
  
    # Difference between static background 
    # and current frame(which is GaussianBlur)
    diff_frame = cv2.absdiff(static_back, gray)
  
    # If change in between static background and
    # current frame is greater than 30 it will show white color(255)
    thresh_frame = cv2.threshold(diff_frame, 175, 255, cv2.THRESH_BINARY)[1]
    thresh_frame = cv2.dilate(thresh_frame, None, iterations = 2)
  
    # Finding contour of moving object
    cnts,_ = cv2.findContours(thresh_frame.copy(), 
                       cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
  
    for contour in cnts:
        if cv2.contourArea(contour) < 10000:
            continue
        motion = 1
  
        (x, y, w, h) = cv2.boundingRect(contour)
        # making green rectangle around the moving object
        cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 3)

    motion_list.append(motion)
    if motion_list[-1]==1 and motion_list[-2]==0:
        result, image = video.read()
        date = datetime.now()
        date1 = "labrats" + date.strftime(" (%m-%d-%Y), %H-%M-%S")
        date2 = date1+".png"

        cv2.imwrite(date2,image)

        with open(date2,"rb") as f:
            png_encoded = base64.b64encode(
                f.read())
            print(png_encoded)
        
        myobj = {'time_captured':str(
            datetime.now()), 'captured_image':png_encoded}
        requests.post(url, data=myobj)

        times.append(datetime.now())
        ret, encoded = cv2.imencode('.jpg', frame)
        imagedata = encoded.tobytes()
        imagedata = base64.b64encode(imagedata)
		# with open('temp.jpg', 'wb') as fp:
		# 	fp.write(imagedata)

    if motion_list[-1]==0 and motion_list[-2]==1:
        assert imagedata is not None
        print(f"{datetime.now()} End")
        times.append(datetime.now())
		# with open('temp.jpg', 'rb') as fp:
		# 	imagedata = fp.read()
        print(len(imagedata))
        send(times[-2], times[-1], imagedata)
        imagedata = None
  
    # Displaying image in gray_scale
    cv2.imshow("Gray Frame", gray)
  
    # Displaying the difference in currentframe to
    # the staticframe(very first_frame)
    cv2.imshow("Difference Frame", diff_frame)
  
    # Displaying the black and white image in which if
    # intensity difference greater than 30 it will appear white
    cv2.imshow("Threshold Frame", thresh_frame)
  
    # Displaying color frame with contour of motion of object
    cv2.imshow("Color Frame", frame)
  
    key = cv2.waitKey(1)
    # if q entered whole process will stop
    if key == ord('q'):
        break

  
video.release()
  
# Destroying all the windows
cv2.destroyAllWindows()

