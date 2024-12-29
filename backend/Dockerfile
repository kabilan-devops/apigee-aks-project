FROM python:3.9-slim

# Set the working directory
WORKDIR /app

# Copy requirements and application files
COPY . /app

# Install FastAPI and Uvicorn
RUN pip install fastapi uvicorn

# Expose the application port
EXPOSE 8000

# Command to run the application
CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8000"]
