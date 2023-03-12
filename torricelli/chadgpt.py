import pygame
import math

pygame.init()

# Set up the window
screen_width, screen_height = 800, 600
screen = pygame.display.set_mode((screen_width, screen_height))
pygame.display.set_caption("Water Animation")

# Set up the bottle and valve
pos_bx, pos_by = 0, 0
b_base, b_altura = 76.2, 165.1
raise_val = 25.4
base_val, altura_val = 10, 5

# Set up the water
aguah = b_altura
base_area = math.pi * (b_base / 2) ** 2
agua_vd = base_area * aguah

# Set up the animation parameters
ti, tf, n = 0, 50, 100
dt = (tf - ti) / n
t = 0

while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            exit()

    # Calculate the new water level and velocity
    while aguah > raise_val + altura_val:
        t += dt
        vel = math.sqrt(2 * 9.8 * aguah)
        G = vel * dt * (altura_val / 2) ** 2 * math.pi
        agua_vd -= G
        aguah = agua_vd / base_area

        # Clear the screen and draw the objects
        screen.fill((255, 255, 255))
        pygame.draw.rect(screen, (0, 0, 255), (pos_bx, screen_height - pos_by - aguah, b_base, aguah))
        pygame.draw.rect(screen, (0, 0, 255), (pos_bx + b_base, screen_height - pos_by - raise_val - altura_val, base_val, altura_val))
        pygame.display.flip()

        pygame.time.wait(10)  # Wait a bit before the next update

    # Draw the final water level and graph
    A = 0.01207
    B = -0.686
    C = 13.01
    y = A * t ** 2 + B * t + C

    screen.fill((255, 255, 255))
    pygame.draw.rect(screen, (0, 0, 255), (pos_bx, screen_height - pos_by - aguah, b_base, aguah))
    pygame.draw.rect(screen, (0, 0, 255), (pos_bx + b_base, screen_height - pos_by - raise_val - altura_val, base_val, altura_val))
    pygame.draw.line(screen, (255, 0, 0), (0, screen_height - y), (screen_width, screen_height - y), 3)
    pygame.display.flip()

    pygame.time.wait(10)  # Wait a bit before closing the window

