import threading

count = 0

def increment():
    global count
    for _ in range(1000000):
        count += 1

# 2つのスレッドを生成し、同時にincrement関数を呼び出す
thread1 = threading.Thread(target=increment)
thread2 = threading.Thread(target=increment)

thread1.start()
thread2.start()

thread1.join()
thread2.join()

print("最終的なカウント:", count)