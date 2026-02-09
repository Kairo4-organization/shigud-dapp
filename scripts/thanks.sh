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
    echo -e "  ${color}████████╗${RESET} ${color}██╗  ██╗${RESET}  ${color}█████╗${RESET}  ${color}███╗   ██╗${RESET} ${color}██╗  ██╗${RESET} ${color}███████╗${RESET}"
    echo -e "  ${color}╚══██╔══╝${RESET} ${color}██║  ██║${RESET} ${color}██╔══██╗${RESET} ${color}████╗  ██║${RESET} ${color}██║ ██╔╝${RESET} ${color}██╔════╝${RESET}"
    echo -e "     ${color}██║${RESET}    ${color}███████║${RESET} ${color}███████║${RESET} ${color}██╔██╗ ██║${RESET} ${color}█████╔╝${RESET}  ${color}███████╗${RESET}"
    echo -e "     ${color}██║${RESET}    ${color}██╔══██║${RESET} ${color}██╔══██║${RESET} ${color}██║╚██╗██║${RESET} ${color}██╔═██╗${RESET}  ${color}╚════██║${RESET}"
    echo -e "     ${color}██║${RESET}    ${color}██║  ██║${RESET} ${color}██║  ██║${RESET} ${color}██║ ╚████║${RESET} ${color}██║  ██╗${RESET} ${color}███████║${RESET}"
    echo -e "     ${color}╚═╝${RESET}    ${color}╚═╝  ╚═╝${RESET} ${color}╚═╝  ╚═╝${RESET} ${color}╚═╝  ╚═══╝${RESET} ${color}╚═╝  ╚═╝${RESET} ${color}╚══════╝${RESET}"
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
echo -e "  ${YELLOW}████████╗${RESET} ${GREEN}██╗  ██║${RESET}  ${BLUE}█████╗${RESET}  ${PURPLE}███╗   ██╗${RESET} ${RED}██╗  ██╗${RESET} ${CYAN}███████╗${RESET}"
sleep 0.08
echo -e "  ${YELLOW}╚══██╔══╝${RESET} ${GREEN}██║  ██║${RESET} ${BLUE}██╔══██╗${RESET} ${PURPLE}████╗  ██║${RESET} ${RED}██║ ██╔╝${RESET} ${CYAN}██╔════╝${RESET}"
sleep 0.08
echo -e "     ${YELLOW}██║${RESET}    ${GREEN}███████║${RESET} ${BLUE}███████║${RESET} ${PURPLE}██╔██╗ ██║${RESET} ${RED}█████╔╝${RESET}  ${CYAN}███████╗${RESET}"
sleep 0.08
echo -e "     ${YELLOW}██║${RESET}    ${GREEN}██╔══██║${RESET} ${BLUE}██╔══██║${RESET} ${PURPLE}██║╚██╗██║${RESET} ${RED}██╔═██╗${RESET}  ${CYAN}╚════██║${RESET}"
sleep 0.08
echo -e "     ${YELLOW}██║${RESET}    ${GREEN}██║  ██║${RESET} ${BLUE}██║  ██║${RESET} ${PURPLE}██║ ╚████║${RESET} ${RED}██║  ██╗${RESET} ${CYAN}███████║${RESET}"
sleep 0.08
echo -e "     ${YELLOW}╚═╝${RESET}    ${GREEN}╚═╝  ╚═╝${RESET} ${BLUE}╚═╝  ╚═╝${RESET} ${PURPLE}╚═╝  ╚═══╝${RESET} ${RED}╚═╝  ╚═╝${RESET} ${CYAN}╚══════╝${RESET}"
sleep 0.15
echo ""
echo -e "                  ${BOLD}${WHITE}for Watching This Demo!${RESET}"
echo ""
echo -e "${CYAN}===============================================================================${RESET}"
echo ""
sleep 0.2

# Project info
echo -e "  ${YELLOW}PROJECT:${RESET}"
echo -e "     ${BOLD}Sipher — Privacy-as-a-Skill for Multi-Chain Agents${RESET}"
echo ""
sleep 0.2

echo -e "  ${GREEN}STATUS:${RESET}"
echo -e "     ${BOLD}${GREEN}Live on Solana Mainnet${RESET}"
echo ""
sleep 0.2

echo -e "  ${BLUE}TESTS:${RESET}"
echo -e "     ${BOLD}${GREEN}566/566 PASSING${RESET} ${DIM}(36 suites, 0 failed)${RESET}"
sleep 0.1
printf "     ${GREEN}✓${RESET} 71 API Endpoints   ${DIM}(REST + OpenClaw skill)${RESET}\n"
sleep 0.05
printf "     ${GREEN}✓${RESET} 17 Chains          ${DIM}(Solana, EVM, NEAR, Cosmos, Move, Bitcoin)${RESET}\n"
sleep 0.05
printf "     ${GREEN}✓${RESET} 7 Crypto Primitives ${DIM}(stealth, commitments, proofs, encryption)${RESET}\n"
sleep 0.05
printf "     ${GREEN}✓${RESET} 4 Client SDKs      ${DIM}(TypeScript, Python, Rust, Go)${RESET}\n"
echo ""
sleep 0.2

echo -e "  ${PURPLE}PROGRAM:${RESET}"
echo -e "     ${BOLD}S1PMFspo4W6BYKHWkHNF7kZ3fnqibEXg3LQjxepS9at${RESET}"
echo -e "     ${DIM}Solana Mainnet-Beta${RESET}"
echo ""
echo -e "${CYAN}===============================================================================${RESET}"
echo ""
sleep 0.25

# Quick links
echo -e "  ${BOLD}${CYAN}LINKS${RESET}"
echo ""
sleep 0.1
printf "  ${GREEN}API     ${RESET}: sipher.sip-protocol.org\n"
sleep 0.1
printf "  ${PURPLE}Docs    ${RESET}: sipher.sip-protocol.org/docs\n"
sleep 0.1
printf "  ${BLUE}GitHub  ${RESET}: github.com/sip-protocol/sipher\n"
sleep 0.1
printf "  ${YELLOW}SDK     ${RESET}: npmjs.com/package/@sip-protocol/sipher-client\n"
sleep 0.1
printf "  ${RED}Skill   ${RESET}: sipher.sip-protocol.org/skill.md\n"
echo ""
echo -e "${CYAN}===============================================================================${RESET}"
echo ""
sleep 0.3

# Islamic blessing
echo -e "         ${YELLOW}✨${RESET}     ${YELLOW}⭐${RESET}  ${BOLD}${WHITE}JazakAllahu khairan for your time!${RESET}  ${YELLOW}⭐${RESET}     ${YELLOW}✨${RESET}"
sleep 0.1
echo -e "      ${YELLOW}⭐${RESET}                                                            ${YELLOW}⭐${RESET}"
sleep 0.1
echo ""
echo -e "     ${YELLOW}✨${RESET}          ${GREEN}May Allah bless your coding journey!${RESET}          ${YELLOW}✨${RESET}"
sleep 0.1
echo ""
echo -e "      ${YELLOW}⭐${RESET}                                                            ${YELLOW}⭐${RESET}"
sleep 0.1
echo -e "         ${YELLOW}✨${RESET}                ${DIM}${YELLOW}Alhamdulillah${RESET}                 ${YELLOW}✨${RESET}"
sleep 0.15
echo ""
echo -e "${CYAN}===============================================================================${RESET}"
echo ""
