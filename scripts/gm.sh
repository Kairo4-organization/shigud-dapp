#!/bin/bash

# ANSI colors and styles
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
WHITE='\033[1;37m'
BOLD='\033[1m'
DIM='\033[2m'
RESET='\033[0m'

# Color cycling banner
print_banner() {
  local colors=("${CYAN}" "${BLUE}" "${PURPLE}" "${RED}" "${YELLOW}" "${GREEN}")

  for color in "${colors[@]}"; do
    clear
    echo ""
    echo -e "${CYAN}===============================================================================${RESET}"
    echo ""
    echo -e "  ${color}███████╗${RESET} ${color}██╗${RESET} ${color}██████╗${RESET}  ${color}██╗  ██╗${RESET} ${color}███████╗${RESET} ${color}██████╗${RESET}"
    echo -e "  ${color}██╔════╝${RESET} ${color}██║${RESET} ${color}██╔══██╗${RESET} ${color}██║  ██║${RESET} ${color}██╔════╝${RESET} ${color}██╔══██╗${RESET}"
    echo -e "  ${color}███████╗${RESET} ${color}██║${RESET} ${color}██████╔╝${RESET} ${color}███████║${RESET} ${color}█████╗${RESET}   ${color}██████╔╝${RESET}"
    echo -e "  ${color}╚════██║${RESET} ${color}██║${RESET} ${color}██╔═══╝${RESET}  ${color}██╔══██║${RESET} ${color}██╔══╝${RESET}   ${color}██╔══██╗${RESET}"
    echo -e "  ${color}███████║${RESET} ${color}██║${RESET} ${color}██║${RESET}      ${color}██║  ██║${RESET} ${color}███████╗${RESET} ${color}██║  ██║${RESET}"
    echo -e "  ${color}╚══════╝${RESET} ${color}╚═╝${RESET} ${color}╚═╝${RESET}      ${color}╚═╝  ╚═╝${RESET} ${color}╚══════╝${RESET} ${color}╚═╝  ╚═╝${RESET}"
    sleep 0.08
  done
}

clear
print_banner

# Final rainbow banner
clear
echo ""
echo -e "${CYAN}===============================================================================${RESET}"
echo ""
echo -e "  ${YELLOW}███████╗${RESET} ${GREEN}██╗${RESET} ${BLUE}██████╗${RESET}  ${PURPLE}██╗  ██╗${RESET} ${RED}███████╗${RESET} ${CYAN}██████╗${RESET}"
sleep 0.08
echo -e "  ${YELLOW}██╔════╝${RESET} ${GREEN}██║${RESET} ${BLUE}██╔══██╗${RESET} ${PURPLE}██║  ██║${RESET} ${RED}██╔════╝${RESET} ${CYAN}██╔══██╗${RESET}"
sleep 0.08
echo -e "  ${YELLOW}███████╗${RESET} ${GREEN}██║${RESET} ${BLUE}██████╔╝${RESET} ${PURPLE}███████║${RESET} ${RED}█████╗${RESET}   ${CYAN}██████╔╝${RESET}"
sleep 0.08
echo -e "  ${YELLOW}╚════██║${RESET} ${GREEN}██║${RESET} ${BLUE}██╔═══╝${RESET}  ${PURPLE}██╔══██║${RESET} ${RED}██╔══╝${RESET}   ${CYAN}██╔══██╗${RESET}"
sleep 0.08
echo -e "  ${YELLOW}███████║${RESET} ${GREEN}██║${RESET} ${BLUE}██║${RESET}      ${PURPLE}██║  ██║${RESET} ${RED}███████╗${RESET} ${CYAN}██║  ██║${RESET}"
sleep 0.08
echo -e "  ${YELLOW}╚══════╝${RESET} ${GREEN}╚═╝${RESET} ${BLUE}╚═╝${RESET}      ${PURPLE}╚═╝  ╚═╝${RESET} ${RED}╚══════╝${RESET} ${CYAN}╚═╝  ╚═╝${RESET}"
sleep 0.15
echo ""
echo -e "          ${BOLD}${WHITE}Privacy-as-a-Skill for Multi-Chain Agents${RESET}"
echo ""
echo -e "${CYAN}===============================================================================${RESET}"
echo ""
sleep 0.3

# Project identity
echo -e "  ${YELLOW}Bismillah${RESET} ${DIM}— Let's begin${RESET}"
echo ""
sleep 0.3

echo -e "  ${PURPLE}ON-CHAIN PROGRAM:${RESET}"
printf "     ${BOLD}S1PMFspo4W6BYKHWkHNF7kZ3fnqibEXg3LQjxepS9at${RESET}\n"
printf "     ${DIM}Solana Mainnet-Beta${RESET}\n"
echo ""
sleep 0.2

echo -e "  ${CYAN}STATS:${RESET}"
sleep 0.1
printf "     ${GREEN}✓${RESET} Endpoints  : ${BOLD}71${RESET}\n"
sleep 0.05
printf "     ${GREEN}✓${RESET} Tests      : ${BOLD}566${RESET} ${DIM}(36 suites)${RESET}\n"
sleep 0.05
printf "     ${GREEN}✓${RESET} Chains     : ${BOLD}17${RESET} ${DIM}(6 families)${RESET}\n"
sleep 0.05
printf "     ${GREEN}✓${RESET} Client SDKs: ${BOLD}4${RESET}  ${DIM}(TypeScript, Python, Rust, Go)${RESET}\n"
echo ""
sleep 0.2

echo -e "  ${BLUE}CRYPTOGRAPHY:${RESET}"
sleep 0.1
printf "     ${GREEN}✓${RESET} Ed25519 + secp256k1 stealth addresses\n"
sleep 0.05
printf "     ${GREEN}✓${RESET} Pedersen commitments (homomorphic)\n"
sleep 0.05
printf "     ${GREEN}✓${RESET} XChaCha20-Poly1305 encryption\n"
sleep 0.05
printf "     ${GREEN}✓${RESET} STARK range proofs (M31 limbs)\n"
sleep 0.05
printf "     ${GREEN}✓${RESET} BIP32 hierarchical key derivation\n"
echo ""
sleep 0.2

echo -e "  ${YELLOW}TRY IT YOURSELF:${RESET}"
echo ""
sleep 0.1
echo -e "  ${WHITE}1. API Overview${RESET}"
echo -e "     ${DIM}\$${RESET} ${GREEN}curl -s https://sipher.sip-protocol.org/ | jq '{name, tagline, stats, cryptography}'${RESET}"
echo ""
sleep 0.05
echo -e "  ${WHITE}2. Live Crypto Demo (25 steps, real keys)${RESET}"
echo -e "     ${DIM}\$${RESET} ${GREEN}curl -s https://sipher.sip-protocol.org/v1/demo | jq '.data.summary'${RESET}"
echo -e "     ${DIM}\$${RESET} ${GREEN}curl -s https://sipher.sip-protocol.org/v1/demo | jq '.data.steps[0:3]'${RESET}"
echo ""
sleep 0.05
echo -e "  ${WHITE}3. Swagger Docs (71 endpoints)${RESET}"
echo -e "     ${DIM}\$${RESET} ${GREEN}open https://sipher.sip-protocol.org/docs${RESET}"
echo ""
sleep 0.05
echo -e "  ${WHITE}4. Auth Gating (API key enforced)${RESET}"
echo -e "     ${DIM}\$${RESET} ${GREEN}curl -s https://sipher.sip-protocol.org/v1/scan/assets \\\\${RESET}"
echo -e "       ${GREEN}-X POST -H \"Content-Type: application/json\" \\\\${RESET}"
echo -e "       ${GREEN}-d '{\"address\":\"S1PMFspo4W6BYKHWkHNF7kZ3fnqibEXg3LQjxepS9at\"}' | jq .${RESET}"
echo ""
sleep 0.05
echo -e "  ${WHITE}5. Privacy Demo Agent (20-step autonomous flow)${RESET}"
echo -e "     ${DIM}\$${RESET} ${GREEN}git clone https://github.com/sip-protocol/sipher && cd sipher${RESET}"
echo -e "     ${DIM}\$${RESET} ${GREEN}pnpm install && npx tsx scripts/privacy-demo-agent.ts${RESET}"
echo ""
sleep 0.05
echo -e "  ${WHITE}6. Test Suite (566 tests)${RESET}"
echo -e "     ${DIM}\$${RESET} ${GREEN}pnpm test -- --run${RESET}"
echo ""
sleep 0.2

echo -e "${CYAN}===============================================================================${RESET}"
echo ""
echo -e "  ${BOLD}${GREEN}GM! ${RESET}${DIM}Let's demo some privacy.${RESET}"
echo ""
echo -e "${CYAN}===============================================================================${RESET}"
echo ""
