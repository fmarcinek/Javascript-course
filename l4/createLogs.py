from random import randint, choice

tryb = ['GET','SET']

with open('logiWWW.txt','w') as f:
    log = ''
    for i in range(10000):
        log = ''
        for j in range(2):
            log += str(randint(10,99)) + ':'
        log += str(randint(10,99))+ ' '
        for j in range(3):
            log += str(randint(0,300)) + '.'
        log += str(randint(0,300)) + ' '
        log += choice(tryb) + ' '
        log += '/TheApplication/WebResource.axd'+' '
        log += str(randint(1,1000000))+ '\n'
        f.write(log)
