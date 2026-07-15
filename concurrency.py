import threading
import time
import queue

task_queue = queue.Queue(maxsize=5)
condition = threading.Condition()

def producer():
    for i in range(10):
        with condition:
            while task_queue.full():
                print("Queue is full, producer is waiting.")
                condition.wait()
            task_queue.put(i)
            print(f"Produced: {i}")
            condition.notify_all()
        time.sleep(0.2)

def consumer():
    for _ in range(10):
        with condition:
            while task_queue.empty():
              condition.wait()
            item = task_queue.get()
            print(f"Consumed: {item}")
            condition.notify()
            time.sleep(0.3)

p = threading.Thread(target=producer)
c = threading.Thread(target=consumer)

p.start()
c.start()
p.join()
c.join()