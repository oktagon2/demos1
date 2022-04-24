Write-Host "Hello World!"
Add-Type -Path "C:\Users\Ruedi\Documents\Dokumentation\VS2017Projects\Kleinstprojekte1\MasterMind1\bin\Debug\netcoreapp3.1\MasterMindApi1.dll"
$GameObject= New-Object MasterMindApi1.Game
$GameObject.NewGame()
Write-Host $GameObject.masterCode
$ActualTry= $GameObject.GetNextTry()
Write-Host $ActualTry.Colors[0]
$MasterCode= New-Object MasterMindApi1.Code("1234")

[System.Collections.Generic.List[int]]$list = @(1, 2, 3)
[System.Linq.Enumerable]::Min( $list)
foreach( $value in $list) { $value }
foreach( $color in $MasterCode.Colors) { $color }

<# Ich möchte prüfen, ob die Code Klasse funktioniert #>
$Code1= New-Object MasterMindApi1.Code( "1234")
Write-Host Test Code1.Colors
$null -eq (Compare-Object -ReferenceObject $Code1.Colors -DifferenceObject @(1,2,3,4))




function Compare-CodeColors {
    param (
        $Code, $Colors
    )

    $null -eq (Compare-Object -ReferenceObject $Code.Colors -DifferenceObject $Colors)
}

function Write-TestResult {
    param (
        $TestName, $TestResult, $SubTestName
    )

    if( $null -ne $SubTestName) { $TestName = $TestName + ' > ' + $SubTestName }
    Write-Host $TestName ':' $TestResult
}

Write-TestResult 'Compare CodeColors' (Compare-CodeColors $Code1 @(1,2,3,4))

$TestName= 'Can create code with single colors'
$Code1= New-Object MasterMindApi1.Code( 1, 2, 3, 4)
$SubTestName= 'Code1.OK should be true'
$TestResult= $Code1.Ok -eq $true
Write-TestResult $TestName $TestResult $SubTestName
$SubTestName= 'Code1.Colors should be 1, 2, 3, 4'
$TestResult= Compare-CodeColors $Code1 @(1,2,3,4)
Write-TestResult $TestName $TestResult $SubTestName

''
'Can create code with color string'


'When creating a code, the check works'
'Can create rating with two codes'
'Can create rating with rating string'
'When createin a rating, the check works'
'Can compare two equal ratings'
'Can compare two unequal ratings'


