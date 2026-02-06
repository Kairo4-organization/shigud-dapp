# ComplianceReportRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**viewing_key** | [**ViewingKey**](ViewingKey.md) |  | 
**start_time** | **int** | Start of reporting window (Unix ms) | 
**end_time** | **int** | End of reporting window (Unix ms) | 
**auditor_id** | **str** |  | 
**auditor_verification** | [**ComplianceDiscloseRequestAuditorVerification**](ComplianceDiscloseRequestAuditorVerification.md) |  | 
**include_counterparties** | **bool** |  | [optional] [default to False]

## Example

```python
from sipher_client.models.compliance_report_request import ComplianceReportRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ComplianceReportRequest from a JSON string
compliance_report_request_instance = ComplianceReportRequest.from_json(json)
# print the JSON string representation of the object
print(ComplianceReportRequest.to_json())

# convert the object into a dict
compliance_report_request_dict = compliance_report_request_instance.to_dict()
# create an instance of ComplianceReportRequest from a dict
compliance_report_request_from_dict = ComplianceReportRequest.from_dict(compliance_report_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


