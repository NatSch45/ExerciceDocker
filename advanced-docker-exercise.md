# Exercice Docker Avancé : Construction d'un Environnement de Développement Microservices

## Objectif de l'Exercice
Créer un environnement de développement complet pour une application microservices comprenant :
- Un service API Node.js
- Un cache Redis
- Une base de données PostgreSQL
- Un service de monitoring utilisant Prometheus et Grafana

## Exigences

### 1. Service API
- Créer un Dockerfile multi-étapes pour l'application Node.js
- Implémenter des contrôles de santé (health checks)
- Mettre en place une journalisation appropriée
- Configurer les variables d'environnement de manière sécurisée
- Implémenter un arrêt gracieux

### 2. Configuration de la Base de Données
- Configurer PostgreSQL avec une configuration personnalisée
- Créer un script d'initialisation
- Configurer un volume persistant
- Mettre en place des sauvegardes régulières

### 3. Réseau
- Créer des réseaux personnalisés pour isoler les services
- Implémenter une découverte de services appropriée
- Mettre en place des politiques réseau

### 4. Monitoring
- Configurer la collecte de métriques Prometheus
- Mettre en place des tableaux de bord Grafana
- Implémenter des métriques personnalisées pour le service API

### 5. Docker Compose
- Créer un fichier docker-compose.yml prêt pour la production
- Implémenter une gestion appropriée des dépendances
- Configurer des limites de ressources
- Mettre en place des pilotes de journalisation

## Livrables Attendus
1. Tous les Dockerfiles nécessaires
2. Fichier docker-compose.yml
3. Fichiers de configuration
4. Documentation expliquant la configuration

## Temps Alloué
- 3-4 heures pour la réalisation

## Critères d'Évaluation
- Implémentation correcte des builds multi-étapes
- Bonnes pratiques de sécurité
- Optimisation des ressources
- Qualité de la documentation
- Gestion des erreurs
- Configuration du monitoring
