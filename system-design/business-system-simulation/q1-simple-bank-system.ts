// Business System Simulation 
// Title: Q1. Simple Bank System 
// Problem Link: https://leetcode.com/problems/simple-bank-system/?envType=problem-list-v2&envId=ssd-ssd4-business-system-simulation
// Difficulty: Medium
// Time O(1) Space O(n)

class Bank {
    accounts: number[]
    constructor(balance: number[]) {
        this.accounts = balance
    }

    transfer(account1: number, account2: number, money: number): boolean {
        if (this.checkIfNotExist(account1)) return false
        if (this.checkIfNotExist(account2)) return false
        if (this.accounts[account1 - 1] - money < 0) return false

        this.accounts[account1 - 1] -= money
        this.accounts[account2 - 1] += money
        return true
    }

    deposit(account: number, money: number): boolean {
        if (this.checkIfNotExist(account)) return false
        
        this.accounts[account - 1] += money
        return true
    }

    withdraw(account: number, money: number): boolean {
        if (this.checkIfNotExist(account)) return false
        if (this.accounts[account - 1] - money < 0) return false

        this.accounts[account - 1] -= money
        return true
    }

    checkIfNotExist(account: number) {
        if (account > this.accounts.length) return true
    }
}
