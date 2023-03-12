import pygame 
import math 

pygame.init() 
screen_width = 500
screen_height = 500
screen = pygame.display.set_mode((screen_width, screen_height))

square_width = 50
square_height = 50

RED = (255, 0, 0)
square = pygame.Surface((square_width, square_height))
square.fill(RED)

x = 100
y = 100

screen.blit(square, (x, y))
pygame.display.flip()

bBase = 7.62
bHeight = 16.51

# VALVULA 
raise_val = 2.54 # 1 inch = 2.54 cm
baseVal = 1 
alturaVal = 0.5 
areaVal = math.pi * (alturaVal/2) ** 2

print(square.get_height())
velocity = math.sqrt(2 * 9.8 * square.get_height())
print("The velocity is: " + str(velocity))

screen.fill((100, 100, 100))
running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
    
    if square.get_height() > raise_val + alturaVal: 
        velocity = math.sqrt(2 * 9.8 * square.get_height())
        g = velocity * 0.5 * areaVal
        square_height -= g


    
pygame.quit()