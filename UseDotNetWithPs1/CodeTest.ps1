function Get-FunctionName ([int]$StackNumber = 1) {
    return [string]$(Get-PSCallStack)[$StackNumber].FunctionName
}

function Write-TestResult ([boolean]$TestResult) {
    $FunctionName= Get-FunctionName 2
    Write-Host $FunctionName : $TestResult
}

function Compare-CodeColors {
    param (
        $Code, $Colors
    )

    $null -eq (Compare-Object -ReferenceObject $Code.Colors -DifferenceObject $Colors)
}

function CreateCodeWithSingleColors {
    $Code1= New-Object MasterMindApi1.Code( 1,2,3,4)
    $TestResult= Compare-CodeColors $Code1 @(1,2,3,4) `
     -and $Code1.Ok

     Write-TestResult $TestResult
}

function CreateCodeWithString {
    $Code1= New-Object MasterMindApi1.Code( "1235")
    $TestResult= Compare-CodeColors $Code1 @(1,2,3,5) `
     -and $Code1.Ok

     Write-TestResult $TestResult
}

function CreateCodeWithTooLittleColors {
    $Code1= New-Object MasterMindApi1.Code( "123")
    $TestResult= -not $Code1.Ok

    Write-TestResult $TestResult
}

function CreateCodeWithTooMuchColors {
    $Code1= New-Object MasterMindApi1.Code( "12345")
    $TestResult= -not $Code1.Ok

    Write-TestResult $TestResult
}

function CreateCodeWithWrongColors {
    $Code1= New-Object MasterMindApi1.Code( "1239")
    $TestResult= -not $Code1.Ok

    Write-TestResult $TestResult
}

function CreateCodeWithDoubleColors {
    $Code1= New-Object MasterMindApi1.Code( "1233")
    $TestResult= -not $Code1.Ok

    Write-TestResult $TestResult
}

function ConvertCodeToString {
    $Code1= New-Object MasterMindApi1.Code( "1234")
    $TestResult= $Code1.ToString() -eq "1234"

    Write-TestResult $TestResult
}

function TestCode {
    Write-Host TestCode...
    CreateCodeWithSingleColors
    CreateCodeWithString
    CreateCodeWithTooLittleColors
    CreateCodeWithTooMuchColors
    CreateCodeWithWrongColors
    CreateCodeWithDoubleColors
    ConvertCodeToString
    Write-Host ...completed!
}

Add-Type -Path "C:\Users\Ruedi\Documents\Dokumentation\VS2017Projects\Kleinstprojekte1\MasterMind1\bin\Debug\netcoreapp3.1\MasterMindApi1.dll"
TestCode
