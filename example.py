import pygame 

pygame.init() 
screen_width = 500
screen_height = 500
screen = pygame.display.set_mode((screen_width, screen_height))


square_size = 50
RED = (255, 0, 0)
square = pygame.Surface((square_size, square_size))
square.fill(RED)

x = 100
y = 100

screen.blit(square, (x, y))
pygame.display.flip()

screen.fill((100, 100, 100))
running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
    
pygame.quit()