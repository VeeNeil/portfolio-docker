FROM python:3.9-slim

WORKDIR /code

COPY ./requirements.txt ./
# run command 
RUN pip install --no-cache-dir -r requirements.txt
# copy from source to destination
COPY . ./src
ENV FLASK_APP=main
CMD [ "python3", "-m" , "flask", "run", "--host", "0.0.0.0", "--port", "80","--reload"]